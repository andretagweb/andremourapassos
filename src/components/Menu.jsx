function Menu({ styleClass }) {
    return (
        <nav>
            <ul className={`special-elite-regular text-white lg:text-ms md:text-sm   sm:text-xs   ${styleClass}`}>
                <li><a href="#strange" className="hover:underline">Singles</a></li>
                <li className="xl:hidden md:block"><span>|</span></li>
                <li><a href="#cocktailn1" className="hover:underline">Cocktail N1</a></li>
                <li><a href="#cocktailn2" className="hover:underline">Cocktail N2</a></li>
                <li className="xl:hidden md:block"><span>|</span></li>
                <li><a href="#ttmm" className="hover:underline">Tasty Themes for Mono Myths</a></li>
                <li className="xl:hidden md:block"><span>|</span></li>
                <li><a href="#about" className="hover:underline">Sobre</a></li>
                <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
        </nav>
    );
}

export default Menu;