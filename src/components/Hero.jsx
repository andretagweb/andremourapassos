import Menu from './Menu';
import Contact from './Hero/Contact';
import Player from './Hero/Player';

import './Hero.css';

function Hero() {
  return (
    <section className="App-hero bg-white text-black flex mb-12 bellota-text-regular">
      <div className="hero-piano flex w-full h-1/3 relative h-screen align-left border-4">
      <div className="side-key xl:block md:hidden bg-dark w-1/6 p-3 sticky top-0 h-screen">
        <Menu styleClass="flex flex-col space-y-4" />
        </div>
        <div className="keys flex w-full xl:w-5/6">
        <div className="key-redline flex-[1] bg-red-500 shadow-md">
          </div>
          <div className="keys-group flex-[80]">
            <div id="bloodscocktail" className="hero-key key-white">
              <div className="key-image"></div>
              <div className="hover-text">Texto sobre Blood's Cocktail</div>
            </div>
            <div className="hero-key key-black">
              <div className="relative text-white text-center w-full top-1/2 transform -translate-y-1/2">
                <h2 className="hero-title text-4xl drop-shadow-sm font-bold mb-6 text-white limelight-regular">André Moura Passos</h2>
                <h3 className="hero-title text-2xl drop-shadow-sm font-bold mb-6 text-white">Pianista e Compositor</h3>
              </div>
            </div>
            <div id="cocktailn2" className="hero-key key-white">
              <div className="key-image"></div>
              <div className="hover-text">Texto sobre Cocktail Nº2</div>
            </div>
            <div className="hero-key key-black">
              <div className="absolute text-center w-full top-1/2 transform -translate-y-1/2">
              </div>
            </div>
            <div id="cocktailn1" className="hero-key key-white">
              <div className="key-image"></div>
              <div className="hover-text">Texto sobre Cocktail Nº1</div>
            </div>
            <div className="hero-key key-black"></div>
            <div id="strange" className="hero-key key-white">
              <div className="key-image"></div>
              <div className="hover-text">Texto sobre Strange</div>
            </div>
            <div id="strange2" className="hero-key key-white">
              <div className="key-image"></div>
              <div className="hover-text">Texto sobre Strange 2</div>
            </div>
            <div className="hero-key key-black"></div>
            <div id="suburban" className="hero-key key-white">
              <div className="key-image"></div>
              <div className="hover-text">Texto sobre Suburban Ride</div>
            </div>
            <div className="hero-key key-black"></div>
            <div id="ttmm" className="hero-key key-white">
              <div className="key-image"></div>
              <div className="hover-text">Texto sobre TTMM</div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
      <Player />
    </section>
  );
}

export default Hero;
