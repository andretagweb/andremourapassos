const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Dados obrigatórios ausentes.",
      autoReplyStatus,
      debug: debugSteps,
    });
  }

  try {
    debugSteps.push("✅ Enviando e-mail principal...");
    await transporter.sendMail({
      from: `"Contato via Site" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: "Novo Contato pelo Site Pessoal",
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
    });
    debugSteps.push("✅ E-mail principal enviado com sucesso.");
  } catch (error) {
    debugSteps.push("❌ Erro ao enviar e-mail principal: " + error.message);
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar e-mail principal.",
      error: error.message,
      autoReplyStatus,
      debug: debugSteps,
    });
  }

  try {
    debugSteps.push("📬 Enviando resposta automática...");

    const autoReplyInfo = await transporter.sendMail({
      from: `"André Moura Passos" <${process.env.EMAIL_USER}>`,
      to: email,
      subject:
        lang === "pt"
          ? "Obrigado pelo seu contato"
          : lang === "es"
          ? "Gracias por tu mensaje"
          : "Thank you for your message",
      text: getAutoReplyMessage(name, lang),
    });

    autoReplyStatus = `enviada com sucesso (ID: ${autoReplyInfo.messageId})`;
    debugSteps.push("✅ Resposta automática enviada com sucesso.");
  } catch (replyError) {
    const errorMsg = replyError.message || "Erro desconhecido";
    autoReplyStatus = `erro: ${errorMsg}`;
    debugSteps.push("❌ Erro na resposta automática: " + errorMsg);
  }

  return res.status(200).json({
    success: true,
    message: "E-mail principal enviado.",
    autoReplyStatus,
    debug: debugSteps,
  });
}
