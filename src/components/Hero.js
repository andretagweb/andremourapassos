import About from './Hero/About';
import Portfolio from './Hero/Portfolio';
import Contact from './Hero/Contact';
import SoundCloud from './Hero/SoundCloud';

import './Hero.css';

function Hero() {
  return (
    <section className="App-hero bg-white text-black h-screen flex mb-12">
      <div className="hero-piano w-full h-1/3 relative align-left">
        <div className="hero-key white">
        </div>
        <div className="hero-key black">
          <div className="relative text-white  text-center w-full top-1/2 transform -translate-y-1/2">
            <h2 className="hero-title text-5xl drop-shadow-sm font-bold mb-6 text-white">André Moura Passos</h2>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="hover:underline">Sobre</a></li>
                <li><a href="#portfolio" className="hover:underline">Portfólio</a></li>
                <li><a href="#contact" className="hover:underline">Contato</a></li>
              </ul>
            </nav>
            <a href="#portfolio" className="bg-primary text-white py-3 px-6 rounded hover:bg-blue-800">
              Veja Meu Trabalho
            </a>
          </div>
        </div>
        <div className="hero-key white">
        </div>
        <div className="hero-key black">
          <div className="absolute text-center w-full top-1/2 transform -translate-y-1/2">
            <h2 className="hero-title text-5xl drop-shadow-sm font-bold mb-6 text-white">Pianista e Compositor</h2>
            <p className="text-lg mb-8 text-white">Compondo emoções através da música.</p>
          </div>
        </div>
        <div className="hero-key white">
          <About />
        </div>
        <div className="hero-key white">
          <Portfolio/>
        </div>
        <div className="hero-key black"></div>
        <div className="hero-key white">
        <SoundCloud />
        </div>
        <div className="hero-key black"></div>
        <div className="hero-key white">
        <Contact />
        </div>
        <div className="hero-key black"></div>

        <div className="hero-key white"></div>
      </div>

    </section>
  );
}

export default Hero;
