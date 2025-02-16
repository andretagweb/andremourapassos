import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";

const TextItem = ({ text }) => {
    const { t, i18n } = useTranslation("keys");

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // Função para formatar a data de acordo com o idioma atual
    const formatDate = (dateString, locale) => {
        if (!dateString) return "";

        // Convertendo string para objeto Date (suporta "DD/MM/YYYY" ou "YYYY-MM-DD")
        const [day, month, year] = dateString.split("/").map(Number);
        const date = new Date(year, month - 1, day);

        return new Intl.DateTimeFormat(locale, {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(date);
    };

    return (
        <>
            {/* Apenas o título no carrossel */}
            <div className="text-preview cursor-pointer p-4 bg-gray-300 rounded-lg shadow-md" onClick={openModal}>
                <h3 className="text-lg font-bold text-black text-center">{text.title}</h3>
                <span className="text-[12px] font-normal text-black text-center">
                    {t('published_at') + ": " + formatDate(text.date, i18n.language)}
                </span>
            </div>

            {/* Modal para exibir o texto completo */}
            {isOpen &&
                ReactDOM.createPortal(
                    <div>
                        <div className="overlay" onClick={closeModal}></div>
                        <div className="modal text-modal">
                            <button className="close-button" onClick={closeModal}>X</button>
                            <h3 className="text-xl font-bold mb-4">{text.title}</h3>
                            <div className="text-content special-elite-regular">{text.content}</div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default TextItem;
