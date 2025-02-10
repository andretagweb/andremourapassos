import './Header.css';
import { useTranslation } from "react-i18next";
import "../../locales/i18n";

import Menu from '../common/Menu';

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header>
            
            <div className="header-container mx-auto flex justify-center md:block bg-dark text-white
             py-4 fixed z-10 w-full special-elite-regular">
                <Menu />
            </div>
            
        </header>
    );
}

export default Header;
