function Menu({ styleClass }) {
    return (
        <nav className="main-menu">
            <ul className={`special-elite-regular text-gray-medium lg:text-ms md:text-sm sm:text-xs ${styleClass}`}>
                <li><a href="#singles" className="hover:underline">Singles</a></li>
                <li>
                    <span className="inline-block xl:hidden md:inline-block">|</span>
                    <div className="hidden md:hidden xl:block border-t border-gray-500 w-full my-2"></div>
                </li>
                <li><a href="#cocktailn1" className="hover:underline">Cocktail N1</a></li>
                <li><a href="#cocktailn2" className="hover:underline">Cocktail N2</a></li>
                <li>
                    <span className="inline-block xl:hidden md:inline-block">|</span>
                    <div className="hidden md:hidden xl:block border-t border-gray-500 w-full my-2"></div>
                </li>
                <li><a href="#ttmm" className="hover:underline">Tasty Themes for Mono Myths</a></li>
                <li>
                    <span className="inline-block xl:hidden md:inline-block">|</span>
                    <div className="hidden md:hidden xl:block border-t border-gray-500 w-full my-2"></div>
                </li>
                <li><a href="#ttmm" className="hover:underline">Letras</a></li>
                <li><a href="#ttmm" className="hover:underline">Poesias</a></li>
                <li>
                    <span className="inline-block xl:hidden md:inline-block">|</span>
                    <div className="hidden md:hidden xl:block border-t border-gray-500 w-full my-2"></div>
                </li>
                <li><a href="#contact" className="hover:underline">Contato</a></li>
            </ul>
        </nav>
    );
}

export default Menu;
