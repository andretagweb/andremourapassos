import './Keys.css'
import VideoCarousel from "./VideoCarousel";

function Keys({ playPlaylist }) {

  const videos = [
    {
      id: "8nlH2Y1vqkg",
      title: "A Little To Be Happy",
    },
    {
      id: "zcZhTssMr84",
      title: "So Close And So Far Away",
    },
    {
      id: "U66faaJw0jw",
      title: "Solo Through the Portal",
    },
    {
      id: "NGJQh9Ze9dE",
      title: "The Same",
    },
    {
      id: "RjywlJD6nRo",
      title: "You Give No Time",
    },
    {
      id: "oh-BPTLkMAQ",
      title: "Strange Way To Know Me",
    },
    {
      id: "IV8tNKWW0pw",
      title: "Half Liar",
    },
    {
      id: "bxcVte4ufA0",
      title: "Renew the Rising",
    },
    {
      id: "jSphWYMGMo0",
      title: "Tasty Melody #21",
    },
    {
      id: "BpdLDzotYnw",
      title: "Tasty Melody",
    },
    {
      id: "VPeunTpwITs",
      title: "Ordeal",
    },
    {
      id: "zapqWMJi14E",
      title: "Half Liar",
    },
    {
      id: "-PUYX6IB51Q",
      title: "Everyday World",
    },
    {
      id: "eqN9ms6mxuY",
      title: "Both",
    },
    {
      id: "W558z0tjqW0",
      title: "Return with the Cocktail",
    },
  ];

  return (
    <div className="keys">
      {/* Perfil e introdução */}
      <div id="perfiliconograma" className="hero-key key-natural key-white flex items-center">
        <div className="key-image flex-grow"></div>
        <div className="hover-text text text-base w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <span>
            <p>Prazer, sou <strong>tecladista</strong> e <strong>compositor</strong>.
              <br /> Gosto de criar melodias, harmonias, arranjos</p>
            <p> E também gosto de escrever letras <br /> — e poesias e textos.</p>
            <br />
            <p className='text-xs'> Mas acontece que
              <br /> eu não vivo de nada disso não,
            </p>
            <p className='text-sm'>
              <br /> é que nas horas "não de folga" <br /> eu sou programador,
            </p>
            <p className='text-base'>
              <br /> e daí eu faço sites, e daí eu fiz este aqui!
            </p>
            <br />
            <p className="text-md font-bold opacity-1 transition-opacity duration-[20000ms]">
            Sejam bem-vindos!</p>
          </span>
        </div>
      </div>

      {/* Título principal */}
      <div className="hero-key key-accidental key-black">
        <div className="relative text-white text-center w-full top-1/2 transform -translate-y-1/2">
          <h2 className="hero-title text-4xl drop-shadow-sm font-bold mb-6 text-white limelight-regular">André Moura Passos</h2>
          <h3 className="hero-title text-xl drop-shadow-sm font-bold mb-6 text-white">Tecladista, <span className='text-gray-medium font-light'>Web Master,</span> Compositor</h3>
        </div>
      </div>

      {/* Sequência de teclas alternadas */}
      <div id="bloodscocktail" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Cocktail Nº1');
      }}>
        <div className="key-image"></div>
        <div className="hover-text hover-play text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p className="text-md font-semibold text-gray-800">
            Same Bloods Cocktail é meu projeto musical onde exploro diferentes estilos, misturando rock, música instrumental e influências de artistas como Iron Maiden, Queen e Pink Floyd. Até agora, lancei dois EPs com 11 músicas.</p>
          <br />
          <p className="text-md text-gray-800">O primeiro EP, Cocktail Nº1, foi lançado em abril de 2023 e deu início ao projeto. Esse trabalho combina minhas principais influências em uma mistura de rock, pop e piano.</p>
        </div>
      </div>
      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Cocktail Nº1</div>
      </div>

      <div id="cocktailn2" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Cocktail Nº2');
      }}>
        <div className="key-image"></div>
        <div className="hover-text hover-play text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p className="text-md text-gray-800">O segundo EP, Cocktail Nº2, foi lançado em dezembro de 2023, ampliando o caminho iniciado no primeiro trabalho. </p><br /><p>Com seis faixas, o EP apresenta novas ideias e sonoridades, marcando a evolução do projeto e consolidando sua identidade musical.</p>
        </div>
      </div>
      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Cocktail Nº2</div>
      </div>

      <div id="singles" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Singles');
      }}>
        <div className="key-image"></div>
        <div className="hover-text hover-play text w-1/3 absolute top-1/2 left-[60%]
     transform -translate-y-1/2 p-5 rounded-lg text-center 
     opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p className="text-md  font-semibold  text-gray-800">Além dos EPs, lancei três singles: </p>
          <br />
          <p> Sometimes Rock, Strange Way To Know Me e Suburban Ride</p>
        </div>
      </div>

      <div id="strange" className="hero-key key-natural key-white">
        <div className="key-image"></div>
        <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p>Os dois últimos fazem parte do EP Cocktail Nº2, enquanto Sometimes Rock é um trabalho inédito que estará em um álbum a ser lançado em um futuro próximo</p>
        </div>
      </div>
      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Singles</div>
      </div>


      <div id="ttmm" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('TTMM');
      }}>
        <div className="key-image"></div>
        <div className="hover-text hover-play text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p className="text-md  font-semibold  text-gray-800">"Tasty Themes for Mono Myths" é um álbum instrumental inspirado no Monomito, também conhecido como Jornada do Herói, um conceito desenvolvido pelo mitólogo americano Joseph Campbell.</p>
          <br />
          <p>Campbell observou que histórias de diversas culturas seguem uma estrutura similar: o herói é chamado para uma aventura, enfrenta desafios, passa por transformações e retorna com novos aprendizados. Essa narrativa reflete experiências humanas universais de superação e crescimento.</p>
        </div>
      </div>

      <div className="hero-key key-accidental key-black">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Tasty Theme for Mono Myths</div>
      </div>

      <div id="suburban" className="hero-key key-natural key-white">
        <div className="key-image"></div>
        <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p>Campbell observou que histórias de diversas culturas seguem uma estrutura similar: o herói é chamado para uma aventura, enfrenta desafios, passa por transformações e retorna com novos aprendizados. Essa narrativa reflete experiências humanas universais de superação e crescimento.</p>
          <br />
          <p>Cada faixa do álbum faz referência a uma etapa da Jornada do Herói. Assim, o álbum explora os desafios e transformações que enfrentamos em nossas jornadas pessoais, além de buscar inspirar a criação de novas histórias nesse formato.</p>
        </div>
      </div>

      <div className="hero-key key-natural key-black">
        <div className="key-image"></div>
        <div className="key-videos hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <VideoCarousel videos={videos} />
          <br />
        </div>
      </div>

      <div className="hero-key key-accidental key-white">
        <div className="hover-text absolute bottom-2 right-2 text-black opacity-0 text-xl font-semibold italic">Vídeos</div>
      </div>

      <div className="hero-key key-natural key-black">
        <div className="key-image"></div>
        <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p>Poesias</p>
          <br />
        </div>
      </div>

      <div className="hero-key key-accidental key-white"></div>

      <div className="hero-key key-natural key-black">
        <div className="key-image"></div>
        <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p>Poesias</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Keys;
