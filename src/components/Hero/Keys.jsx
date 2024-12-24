import './Keys.css'

function Keys({ onPlayPause }) {
    return (
        <div className="keys">
            <div id="perfiliconograma" class="hero-key key-white flex items-center">
                <div class="key-image flex-grow"></div>
                <div class="hover-text text w-1/3 text-right p-4">
                    <span>
                        <p>Sou músico, pianista, tecladista e compositor.
                            <br /> Também curto escrever — poesias, textos, ideias.</p>
                        <br />
                        <p>Mas espera,
                            <br /> eu não vivo de nada disso não,
                            <br /> nas horas "não de folga" sou programador,
                            <br /> e eu também faço sites <br /> e também fiz esse aqui
                            <br /> ...mas é mais pra divulgar minha arte do que qualquer outra coisa.</p>
                        <p>Bem-vindo!</p>
                    </span>
                </div>
            </div>
            <div className="hero-key key-black">
                <div className="relative text-white text-center w-full top-1/2 transform -translate-y-1/2">
                    <h2 className="hero-title text-4xl drop-shadow-sm font-bold mb-6 text-white limelight-regular">André Moura Passos</h2>
                    <h3 className="hero-title text-2xl drop-shadow-sm font-bold mb-6 text-white">Pianista e Compositor</h3>
                </div>
            </div>
            <div id="bloodscocktail" className="hero-key key-white" onClick={() => {
                        console.log('Botão clicado!');
                        onPlayPause();
                      }}>
                <div className="key-image"></div>
                <div class="hover-text  hover-play text w-1/3 text-right p-4">
                    <p className="text-md font-semibold text-gray-800">
                        Same Bloods Cocktail é meu projeto musical onde exploro diferentes estilos, combinando rock, música instrumental e outras influências que me inspiram, como Iron Maiden, Queen e Pink Floyd. Já lancei dois EPs com 11 músicas.
                    </p>
                </div>
            </div>
            <div className="hero-key key-black ">
                <div className="relative w-full top-1/2 transform -translate-y-1/2 text text-center font-bold text-grey text-xl">

                </div>
            </div>
            <div id="cocktailn2" className="hero-key key-white" onClick={() => {
                        console.log('Botão clicado!');
                        onPlayPause();
                      }}>
                <div className="key-image"></div>
                <div className="hover-text">Texto sobre Cocktail Nº1</div>
                
            </div>
            <div className="hero-key key-black"></div>
            <div id="cocktailn1" className="hero-key key-white">
                <div className="key-image"></div>
                <div className="hover-text">Texto sobre Strange</div>
            </div>
            <div id="strange" className="hero-key key-white">
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
        </div>
    );
}

export default Keys;
