import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const { t } = useTranslation("footer");

  const API_BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "https://andremourapassos.vercel.app";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setStatus(data.success ? t("email_sent") : t("email_failed"));
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
          <button className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-800">
            {t("send")}
          </button>
          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
