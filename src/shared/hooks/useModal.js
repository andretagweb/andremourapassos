import { useState } from "react";
import useIsMobile from "./useIsMobile";

function useModal() {
    const isMobile = useIsMobile();
    const [activeModal, setActiveModal] = useState(null);

    function showModal(modalId) {
        if (isMobile && modalId) {
            setActiveModal(modalId);

            // Esconde todos os modais
            document.querySelectorAll(`.key-modal`).forEach((modal) => {
                modal.style.display = "none";
            });
            document.querySelectorAll(`.hover-text`).forEach((hoverText) => {
                hoverText.style.display = "none";
            });

            // Mostra o modal específico
            const modalElement = document.querySelector(`#${modalId} .key-modal`);
            const hoverTextElement = document.querySelector(`#${modalId} .key-modal .hover-text`);
            if (modalElement && hoverTextElement) {
                modalElement.style.display = "block";
                modalElement.style.opacity = 1;
                hoverTextElement.style.display = "block";
                hoverTextElement.style.opacity = 1;
            }

            // Exibe o botão de fechar
            const closeModalElement = document.querySelector(`.close-modal`);
            if (closeModalElement) closeModalElement.style.display = "block";
        }
    }

    function hideModal() {
        if (isMobile) {
            setActiveModal(null);
            document.querySelectorAll(`.key-modal`).forEach((modal) => {
                modal.style.display = "none";
            });
            document.querySelectorAll(`.hover-text`).forEach((hoverText) => {
                hoverText.style.display = "none";
            });

            // Esconde o botão de fechar
            const closeModalElement = document.querySelector(`.close-modal`);
            if (closeModalElement) closeModalElement.style.display = "none";
        }
    }

    return { activeModal, showModal, hideModal };
}

export default useModal;
