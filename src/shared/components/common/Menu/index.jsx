import { useRef } from "react";
import './index.css';

import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import "../../../locales/i18n";

import socialMedia from "../Social";

function Menu() {
    const menuRef = useRef(null);
    const { t, i18n } = useTranslation("menu");
    const navigate = useNavigate();

    const menuItems = [
        { href: "#singles", label: t("singles") },
        { isDivider: true },
        { href: "#bloodscocktail", label: t("cocktail_n1") },
        { href: "#cocktailn2", label: t("cocktail_n2") },
        { isDivider: true },
        { href: "#ttmm", label: t("ttmm") },
        { isDivider: true },
        { href: "#videos", label: t("videos") },
        { href: "#poems", label: t("poems") },
        { isDivider: true },
        { href: "#contact", label: t("contact") },
    ];

    const scrollMenu = (direction) => {
        if (menuRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            menuRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const handleScroll = (e, href) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="main-menu relative w-full">
            {/* Botão para rolar à esquerda */}
            <div className="navigation-arrow absolute left-0 top-1/3 m-1 -translate-y-1/2 transform">
                <button
                    className="button bg-gray-300 p-1 w-8 h-8 rounded-full shadow-md"
                    onClick={() => scrollMenu("left")}
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Lista do menu */}
            <ul ref={menuRef} className="flex xl:flex-col justify-start flex-nowrap overflow-x-auto space-x-4 sm:space-x-4 xsm:space-x-2 xl:space-x-0 xl:space-y-4 no-scrollbar ml-14 mr-14 xl:ml-0 xl:mr-0 xl:items-start items-center text-center">
                {/* Bandeiras de idioma */}
                <li className="flags flex justify-center xl:justify-start space-x-3 xl:mt-4 xl:items-start items-center">
                    <button onClick={() => { i18n.changeLanguage("pt"); navigate("/pt"); }} className={`lang-btn ${i18n.language.split('-')[0] === "pt" ? "active-lang" : ""}`}>
                        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" alt="Português" className="lang-flag" width="24" height="16" />
                    </button>

                    <button onClick={() => { i18n.changeLanguage("en"); navigate("/en"); }} className={`lang-btn ${i18n.language.split('-')[0] === "en" ? "active-lang" : ""}`}>
                        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt="English" className="lang-flag" width="24" height="16" />
                    </button>

                    <button onClick={() => { i18n.changeLanguage("es"); navigate("/es"); }} className={`lang-btn ${i18n.language.split('-')[0] === "es" ? "active-lang" : ""}`}>
                        <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt="Español" className="lang-flag" width="24" height="16" />
                    </button>
                </li>

                {/* Divisor entre bandeiras e menu */}
                <li className="flex xl:w-full justify-start align-top">
                    <span className="xl:hidden text-gray-light hover:underline whitespace-nowrap self-end h-4 xsm:text-[12px] sm:text-[15px] xl:text-[16px]">|</span>
                    <hr className="hidden xl:block border-t border-gray-400 w-full h-[1px]" />
                </li>

                {menuItems.map((item, index) => (
                    item.isDivider ? (
                        <li key={index} className="flex xl:w-full justify-start align-top">
                            <span className="xl:hidden text-gray-light hover:underline whitespace-nowrap self-end h-4 xsm:text-[12px] sm:text-[15px] xl:text-sm">|</span>
                            <hr className="hidden xl:block border-t border-gray-400 w-full h-[1px]" />
                        </li>
                    ) : (
                        <li key={index} className="flex flex-col justify-end h-full items-end">
                            <a
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="text-gray-light hover:underline whitespace-nowrap self-end h-4 xsm:text-[12px] sm:text-[15px] xl:text-sm"
                            >
                                {item.label}
                            </a>

                        </li>
                    )
                ))}

                {/* Divisor entre menu e social */}
                <li className="flex xl:items-start items-center xl:w-full sm:flex xsm:hidden">
                    <span className="xl:hidden h-4">|</span>
                    <hr className="hidden xl:block border-t border-gray-400 w-full h-[1px]" />
                </li>

                {/* Mídias sociais */}
                <li className="flex justify-center xl:justify-start space-x-3 xl:mt-4 xl:items-start items-center sm:flex xsm:hidden">
                    {socialMedia.map((media, index) => (
                        <a
                            key={index}
                            href={media.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon flex xl:items-start items-center text-white hover:text-gray-400 transition duration-300"
                        >
                            <div className="h-8 flex items-center justify-center">
                                {media.icon}
                            </div>
                        </a>
                    ))}
                </li>



            </ul>

            {/* Botão para rolar à direita */}
            <div className="navigation-arrow absolute right-0 top-1/3 m-1 -translate-y-1/2 transform">
                <button
                    className="button bg-gray-300 p-1 w-8 h-8 rounded-full shadow-md"
                    onClick={() => scrollMenu("right")}
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Menu;
