import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { t, i18n } = useTranslation("footer");

  const API_BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "https://andremourapassos.vercel.app";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    try {
      console.log("📤 Enviando dados para backend:", formData, "Idioma:", i18n.language);

      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          lang: i18n.language,
        }),
      });

      const data = await response.json();
      console.log("🧪 RESPOSTA COMPLETA DO BACKEND:", data); // Log importante

      if (data.success) {
        console.log("✅ E-mail principal enviado com sucesso.");

        if (data.autoReplyStatus !== undefined) {
          console.log("📬 Status da resposta automática:", data.autoReplyStatus);
        } else {
          console.warn("⚠️ Campo autoReplyStatus ausente no JSON do backend.");
        }
      } else {
        console.warn("⚠️ E-mail principal enviado, mas houve erro:", data.message);
      }

      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("❌ Erro na requisição:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="text-white bg-gray-dark py-12 special-elite-regular">
      <div className="mx-auto xsm:mx-4">
        <h3 className="text-3xl font-bold text-center mb-6">{t("contact")}</h3>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">{t("name")}</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-secondary text-dark"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">{t("e-mail")}</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-secondary text-dark"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">{t("message")}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-secondary text-dark"
              required
            />
          </div>

          <div className="text-sm text-center break-all" style={{ color: "rgb(110, 160, 209)" }}>
            <div className="mb-4">
              <button
                type="submit"
                className="text-base bg-primary text-white py-2 px-4 rounded hover:bg-blue-800"
                disabled={loading}
              >
                {loading
                  ? t("sending_email")
                  : sent
                    ? t("email_sent") + " ✔️"
                    : t("send")}
              </button>
            </div>

            <span className="hidden sm:inline">
              <Trans
                i18nKey="alt_email"
                t={t}
                components={{
                  email: (
                    <a
                      href="mailto:andrepassos.compositor@gmail.com?subject=Contato%20Pelo%20Site%20Oficial%20de%20André%20Moura%20Passos"
                      className="underline"
                    >
                      andrepassos.compositor@gmail.com
                    </a>
                  ),
                }}
              />
            </span>

            <span className="block sm:hidden">
              {t("alt_email_split_1")}<br />
              <a
                href="mailto:andrepassos.compositor@gmail.com?subject=Contato%20Pelo%20Site%20Oficial%20de%20André%20Moura%20Passos"
                className="underline"
              >
                andrepassos.compositor@gmail.com
              </a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
