import Menu from './Menu';
import Contact from './Hero/Contact';
import Player from './Hero/Player';
import Keys from './Hero/Keys';

import './Hero.css';

function Hero() {
  return (
    <section className="App-hero bg-white text-black flex mb-12 bellota-text-regular">
      <div className="hero-piano flex w-full h-1/3 relative h-screen align-left border-4">
        <div className="side-key hidden xl:block bg-dark w-1/6 p-6 sticky top-0 h-screen">
          <Menu styleClass="flex flex-col space-y-4" />
        </div>
        <div className="keyboard flex w-full xl:w-5/6">
          <div className="key-redline flex-[1] bg-red-500 shadow-md">
          </div>
          <div className="keys-group flex-[80]">
            <Keys />
            <Contact />
          </div>
        </div>
      </div>
      <Player />
    </section>
  );
}

export default Hero;
