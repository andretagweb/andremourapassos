function Header() {
    return (
      <header className="bg-dark text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">André Moura Passos</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">Sobre</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfólio</a></li>
              <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  