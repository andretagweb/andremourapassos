const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Mensagem de resposta automática
function getAutoReplyMessage(name, lang = "pt") {
  const links = `
🎧 Spotify: https://open.spotify.com/artist/4lIiJuoMLpeO6JKNkOcx4y
🍎 Apple Music: https://music.apple.com/br/artist/same-bloods-cocktail/1676328013
🔊 SoundCloud: https://soundcloud.com/same-bloods-cocktail
📺 YouTube: https://www.youtube.com/@samebloodscocktail
🎵 TikTok: https://tiktok.com/@samebloodscocktail
📸 Instagram: https://instagram.com/samebloodscocktail
📘 Facebook: https://www.facebook.com/share/16sm9c4wd9/
💼 LinkedIn: https://www.linkedin.com/in/andremourapassos/
`;

  const messages = {
    pt: `Olá ${name}!

Agradeço muito sua visita e o interesse em conhecer meu site pessoal e meu trabalho musical.

Sinta-se à vontade para continuar explorando minha música e conteúdos através dos canais oficiais do projeto Same Bloods Cocktail:

${links}

Mais uma vez, obrigado pela sua mensagem.
Com apreço,
André Moura Passos`,
    en: `Hello ${name}!

I truly appreciate your visit and your interest in checking out my personal website and musical work.

Feel free to keep exploring my music and content through the official channels of my project Same Bloods Cocktail:

${links}

Thank you again for your message.
With appreciation,
André Moura Passos`,
    es: `¡Hola ${name}!

Te agradezco mucho tu visita y tu interés en conocer mi sitio web personal y mi trabajo musical.

No dudes en seguir explorando mi música y contenido a través de los canales oficiales de mi proyecto Same Bloods Cocktail:

${links}

Gracias nuevamente por tu mensaje.
Con aprecio,
André Moura Passos`,
  };

  return messages[lang] || messages["en"];
}

export default async function handler(req, res) {
  const { name, email, message, lang = "pt" } = req.body;
  let autoReplyStatus = "não enviado";
  const debugSteps = [];

  try {
    if (!name || !email || !message) {
      debugSteps.push("❌ Campos obrigatórios ausentes.");
      return res.status(400).json({
        success: false,
        message: "Dados obrigatórios ausentes.",
        autoReplyStatus,
        debug: debugSteps,
      });
    }

    // Envio do e-mail principal
    debugSteps.push("📤 Enviando e-mail principal...");
    await transporter.sendMail({
      from: `"Contato via Site" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: "Novo Contato pelo Site",
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
    });
    debugSteps.push("✅ E-mail principal enviado");

    // Tentativa de envio da resposta automática
    debugSteps.push("📨 Enviando resposta automática...");
    const autoReplyInfo = await Promise.race([
      transporter.sendMail({
        from: `"André Moura Passos" <${process.env.EMAIL_USER}>`,
        to: email,
        subject:
          lang === "pt"
            ? "Obrigado pelo seu contato"
            : lang === "es"
            ? "Gracias por tu mensaje"
            : "Thank you for your message",
        text: getAutoReplyMessage(name, lang),
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout ao enviar resposta automática")), 3000)
      ),
    ]);

    autoReplyStatus = `enviada com sucesso (ID: ${autoReplyInfo.messageId})`;
    debugSteps.push("✅ Resposta automática enviada");
  } catch (error) {
    const errorCode = error.code || "SEM_CODIGO";
    const errorMsg = error.message || "Erro desconhecido";
    autoReplyStatus = `erro (${errorCode}): ${errorMsg}`;
    debugSteps.push(`❌ Erro durante envio: ${autoReplyStatus}`);
  }

  // Retorno garantido com autoReplyStatus
  return res.status(200).json({
    success: true,
    message: "E-mail principal enviado.",
    autoReplyStatus,
    debug: debugSteps,
  });
}
