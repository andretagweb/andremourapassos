function Header() {
    return (
      <header className="App-header bg-dark text-white py-4 bellota-text-light">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#cocktailn1" className="hover:underline">Cocktail N1</a></li>
              <li><a href="#cocktailn2" className="hover:underline">Cocktail N2</a></li>
              <li><span>|</span></li>
              <li><a href="#strange" className="hover:underline">Strange Way To Know Me</a></li>
              <li><a href="#suburban" className="hover:underline">Suburban Ride</a></li>
              <li><span>|</span></li>
              <li><a href="#ttmm" className="hover:underline">Tasty Themes for Mono Myths</a></li>
              <li><span>|</span></li>
              <li><a href="#about" className="hover:underline">Sobre</a></li>
              <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  