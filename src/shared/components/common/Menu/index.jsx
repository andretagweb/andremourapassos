import { useRef } from "react";
import './index.css';

import { useTranslation } from "react-i18next";
import "../../../locales/i18n"

function Menu({ styleClass }) {
    const menuRef = useRef(null);
    const { t, i18n } = useTranslation("menu");

    // Array de itens do menu
    const menuItems = [
        { href: "#singles", label: t("singles") },
        { href: "", label: "|" },
        { href: "#cocktailn1", label: t("cocktail_n1") },
        { href: "#cocktailn2", label: t("cocktail_n2") },
        { href: "", label: "|" },
        { href: "#ttmm", label: t("ttmm") },
        { href: "", label: "|" },
        { href: "#lyrics", label: t("lyrics") },
        { href: "#poems", label: t("poems") },
        { href: "", label: "|" },
        { href: "#contact", label: t("contact") },
        { href: "", label: "|" }
    ];

    // Função para rolar horizontalmente
    const scrollMenu = (direction) => {
        if (menuRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            menuRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <nav className="main-menu relative w-full">
            {/* Botão para rolar à esquerda (apenas visível no mobile) */}
            <div className="absolute lg:hidden left-0 top-1/3 m-1 -translate-y-1/2 transform">
                <button
                    className="button bg-gray-300 p-2 rounded-full shadow-md"
                    onClick={() => scrollMenu("left")}
                    aria-label="Scroll left"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Lista de itens do menu gerada dinamicamente */}
            <ul
                ref={menuRef}
                className={`flex items-baseline justify-start lg:justify-center flex-nowrap overflow-x-auto  space-x-4 no-scrollbar pt-2 ml-14 mr-14`}
            >
                {menuItems.map((item, index) => (
                    <li key={index} className="flex">
                        {item.href ? (
                            <a href={item.href} className="hover:underline leading-none whitespace-nowrap">
                                {item.label}
                            </a>
                        ) : (
                            <span className="leading-none whitespace-nowrap">{item.label}</span>
                        )}
                    </li>

                ))}
                <li className="flex">
                    <button
                        onClick={() => i18n.changeLanguage("pt")}
                        className={`lang-btn ${i18n.language === "pt" ? "active-lang" : ""}`}
                    >
                        <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" alt="Português" className="lang-flag" />
                    </button>
                </li>
                
                <li className="flex">
                    <button
                        onClick={() => i18n.changeLanguage("en")}
                        className={`lang-btn ${i18n.language === "en" ? "active-lang" : ""}`}
                    >
                        <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" alt="English" className="lang-flag" />
                    </button>
                </li>
                
                <li className="flex">
                    <button
                        onClick={() => i18n.changeLanguage("es")}
                        className={`lang-btn ${i18n.language === "es" ? "active-lang" : ""}`}
                    >
                        <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt="Español" className="lang-flag" />
                    </button>
                </li>

            </ul>

            {/* Botão para rolar à direita (apenas visível no mobile) */}
            <div className="absolute lg:hidden right-0 top-1/3 m-1 -translate-y-1/2 transform">
                <button
                    className="button bg-gray-300 p-2 rounded-full shadow-md"
                    onClick={() => scrollMenu("right")}
                    aria-label="Scroll right"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Menu;
