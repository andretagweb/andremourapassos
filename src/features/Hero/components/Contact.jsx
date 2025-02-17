import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setStatus(data.success ? "E-mail enviado!" : "Erro ao enviar.");
  };

  return (
    <section id="contact" className="text-white bg-gray-dark py-12 special-elite-regular">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-6">Contato</h3>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-secondary text-dark"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-secondary text-dark"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mensagem</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-secondary text-dark"
              required
            />
          </div>
          <button className="bg-primary text-black py-2 px-4 rounded hover:bg-blue-800">Enviar</button>
          {status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
