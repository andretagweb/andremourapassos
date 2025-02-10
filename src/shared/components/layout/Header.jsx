import Menu from '../common/Menu';

import './Header.css';

import { useTranslation } from "react-i18next";
import "../../locales/i18n";

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header>
            <div className="header-container mx-auto flex justify-center md:block bg-dark text-white
             py-4 fixed z-10 w-full special-elite-regular">
                <Menu/>
            </div>
            <div className='lang'>
                <span>{t("language")}: </span>
                <button onClick={() => i18n.changeLanguage("en")}>English</button>
                <button onClick={() => i18n.changeLanguage("pt")}>Português</button>
                <button onClick={() => i18n.changeLanguage("es")}>Español</button>
            </div>
        </header>
    );
}

export default Header;
