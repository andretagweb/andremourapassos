import './index.css';
import { useTranslation } from "react-i18next";
import "../../../locales/i18n"

function Language() {
    const { t, i18n } = useTranslation();

    return (
        <div className="lang-switch">
            <button onClick={() => i18n.changeLanguage("en")} className="lang-btn">
                <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" alt="English" className="lang-flag" />
            </button>
            <button onClick={() => i18n.changeLanguage("pt")} className="lang-btn">
                <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" alt="Português" className="lang-flag" />
            </button>
            <button onClick={() => i18n.changeLanguage("es")} className="lang-btn">
                <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt="Español" className="lang-flag" />
            </button>
        </div>
    );
}

export default Language;