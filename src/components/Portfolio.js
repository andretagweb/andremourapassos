function Portfolio() {
    return (
      <section id="portfolio" className="py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Portfólio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Projeto 1</h4>
              <p>Descrição breve do projeto musical.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Projeto 2</h4>
              <p>Descrição breve do projeto musical.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Projeto 3</h4>
              <p>Descrição breve do projeto musical.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;
  