import About from './Hero/About';
import Portfolio from './Hero/Portfolio';
import Contact from './Hero/Contact';
import Player from './Hero/Player';

import './Hero.css';

function Hero() {
  return (
    <section className="App-hero bg-white text-black flex mb-12 bellota-text-regular">
      <div className="hero-piano w-full h-1/3 relative h-screen align-left">
        <div className="hero-key key-white">
        </div>
        <div className="hero-key key-black">
          <div className="relative text-white text-center w-full top-1/2 transform -translate-y-1/2">
            <h2 className="hero-title text-5xl drop-shadow-sm font-bold mb-6 text-white">André Moura Passos</h2>
          </div>
        </div>
        <div className="hero-key key-white">
        </div>
        <div className="hero-key key-black">
          <div className="absolute text-center w-full top-1/2 transform -translate-y-1/2">
            <h2 className="hero-title text-5xl drop-shadow-sm font-bold mb-6 text-white">Pianista e Compositor</h2>
            <p className="text-lg mb-8 text-white">Compondo emoções através da música.</p>
          </div>
        </div>
        <div className="hero-key key-white">
          <About />
        </div>
        <div className="hero-key key-black"></div>

        <div className="hero-key key-white">
          <Portfolio />
        </div>
        <div className="hero-key key-white player">
          <Player />
        </div>
        <div className="hero-key key-black"></div>
        <div className="hero-key key-white">
          <Contact />
        </div>
        <div className="hero-key key-black"></div>
        <div className="hero-key key-white"></div>
      </div>
    </section>
  );
}

export default Hero;
