function Contact() {
    return (
      <section id="contact" className="bg-dark text-white py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Contato</h3>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block mb-2">Nome</label>
              <input type="text" className="w-full p-2 rounded bg-secondary text-dark" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">E-mail</label>
              <input type="email" className="w-full p-2 rounded bg-secondary text-dark" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Mensagem</label>
              <textarea className="w-full p-2 rounded bg-secondary text-dark"></textarea>
            </div>
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-800">
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  