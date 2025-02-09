import './index.css'
import YoutubeVideos from '../Videos/YoutubeVideos.json'
import VideoCarousel from "../Videos";
import useModal from "../../../../shared/hooks/useModal"; 

function Keys({ playPlaylist }) {
  
  const { showModal, hideModal } = useModal();

  return (
    <div className="keys">
      {/* Perfil e introdução */}
      
      <div className='close-modal hidden'>
          <button
            onClick={() => hideModal()}
            className="button block sm:block md:hidden absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold cursor-pointer"
            aria-label="Fechar Modal"
          >
            ✕
          </button>
      </div>
      <div id="perfiliconograma" className="hero-key key-natural key-white flex items-center"
        onClick={() => {
          showModal('perfiliconograma')
        }}>
        <div className="key-image flex-grow"></div>
        <div className="key-modal">
          <div className="hover-text text ">
            
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
          </div>
        </div>
      </div>

      {/* Título principal */}
      <div className="hero-key key-accidental key-black">
        <div className="principal-title relative text-white w-full top-1/2 transform -translate-y-1/2 pl-4 lg:pl-0 lg:text-center">
          <h1 className="hero-title text-lg sm:text-3xl md:text-3xl lg:text-4xl drop-shadow-sm font-bold lg:mb-6 text-white limelight-regular">André Moura Passos</h1>
          <h2 className="text-md md:text-md lg:text-xl drop-shadow-sm font-bold lg:mb-6 text-white">
            Tecladista, <span className="text-gray-medium font-light">Web Master,</span> Compositor</h2>
        </div>
      </div>

      {/* Sequência de teclas alternadas */}
      <div id="bloodscocktail" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Cocktail Nº1');
        showModal('bloodscocktail')
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text  hover-play  text ">
            <p className="text-md text-gray-800">
             <strong>Same Bloods Cocktail</strong> é meu projeto musical  <br/> onde exploro diferentes estilos, <br/> misturando rock, música instrumental <br/> e influências de artistas como Iron Maiden, Queen e Pink Floyd.</p>
            <br />
            <p className="text-md font-semibold  text-gray-800">O primeiro EP, Cocktail Nº1, <br/> foi lançado em abril de 2023 e deu início ao projeto. <br/> Esse trabalho combina minhas principais influências <br/> em uma mistura de rock, pop e piano.</p>
          </div>
        </div>
      </div>
      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Cocktail Nº1</div>
      </div>

      <div id="cocktailn2" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Cocktail Nº2');
        showModal('cocktailn2')
      }}>
        <div className="key-image"></div>

        <div className="key-modal">
          <div className="hover-text hover-play text">
            <p className="text-md text-gray-800">O segundo EP, Cocktail Nº2, foi lançado em dezembro de 2023, ampliando o caminho iniciado no primeiro trabalho. </p><br /><p>Com seis faixas, o EP apresenta novas ideias e sonoridades, marcando a evolução do projeto e consolidando sua identidade musical.</p>
          </div>
        </div>
      </div>
      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Cocktail Nº2</div>
      </div>

      <div id="singles" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('Singles');
        showModal('singles')
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text">
            <p className="text-md  font-semibold  text-gray-800">Além dos EPs, lancei três singles: </p>
            <br />
            <p> Sometimes Rock, Strange Way To Know Me e Suburban Ride</p>
          </div>
        </div>

      </div>

      <div id="strange" className="hero-key key-natural key-white" onClick={() => {
        showModal('strange')
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text">
            <p>Os dois últimos fazem parte do EP Cocktail Nº2, enquanto Sometimes Rock é um trabalho inédito que estará em um álbum a ser lançado em um futuro próximo</p>
          </div>
        </div>
      </div>
      <div className="hero-key key-accidental key-black relative">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Singles</div>
      </div>


      <div id="ttmm" className="hero-key key-natural key-white" onClick={() => {
        playPlaylist('TTMM');
        showModal('ttmm')
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text hover-play text absolute top-1/2 transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <p className="text-md  font-semibold  text-gray-800">"Tasty Themes for Mono Myths é um álbum instrumental inspirado na Jornada do Herói, conceito de Joseph Campbell. Ele observou que histórias de diversas culturas seguem uma estrutura comum, onde um herói parte em aventura, enfrenta desafios, se transforma e retorna com novos aprendizados.</p>
            <br />
            <p>Cada faixa do álbum representa uma etapa dessa jornada, explorando os desafios e transformações que fazem parte do crescimento humano. A música busca transmitir as emoções e mudanças vividas pelo herói ao longo de sua trajetória.</p>
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-black">
        <div className="hover-text absolute bottom-2 right-2 text-gray-light opacity-0 text-xl font-semibold italic">Tasty Themes for Mono Myths</div>
      </div>

      <div id="suburban" className="hero-key key-natural key-white" onClick={() => {
        showModal('suburban')
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <p>Além de refletir experiências universais de superação, o álbum pretende inspirar novas histórias dentro desse formato. Sua sonoridade captura momentos de tensão, descoberta, triunfo e retorno, criando uma experiência envolvente.</p>
            <br />
            <p>Dessa forma, Tasty Themes for Mono Myths não apenas traduz a Jornada do Herói em música, mas também incentiva ouvintes a refletirem sobre suas próprias jornadas e desafios pessoais.</p>
          </div>
        </div>
      </div>

      <div id="videos" className="hero-key key-natural key-black" onClick={() => {
        showModal('videos')
      }}>
        <div className="key-image"></div>
        <div className="key-modal">
          <div className="key-videos hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
            <VideoCarousel videos={YoutubeVideos} />
            <br />
          </div>
        </div>
      </div>

      <div className="hero-key key-accidental key-white">
        <div className="key-modal">
          <div className="hover-text absolute bottom-2 right-2 text-black opacity-0 text-xl font-semibold italic">Vídeos</div>
        </div>
      </div>

      <div id="textos" className="hero-key key-natural key-black"  onClick={() => {
        showModal('textos')
      }}>
        <div className="key-image"></div>
        <div className="hover-text text w-1/3 absolute top-1/2 left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <p>Textos</p>
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
