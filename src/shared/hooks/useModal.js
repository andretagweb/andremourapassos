import { useState } from "react";
import useIsMobile from "./useIsMobile";

function useModal() {
    const isMobile = useIsMobile();
    const [activeModal, setActiveModal] = useState(null);

    function showModal(modalId) {
  if (isMobile && modalId) {
    setActiveModal(modalId);

    // Esconde todos os modais (sem quebrar layout)
    document.querySelectorAll(`.key-modal`).forEach((modal) => {
      modal.classList.remove("showing");
    });

    document.querySelectorAll(`.hover-text`).forEach((hoverText) => {
      hoverText.style.display = "none";
    });

    const modalElement = document.querySelector(`#${modalId} .key-modal`);
    const hoverTextElement = document.querySelector(`#${modalId} .key-modal .hover-text`);

    if (modalElement && hoverTextElement) {
      modalElement.style.display = "block";
      hoverTextElement.style.display = "block";

      // FORÇA REPAINT PARA A TRANSIÇÃO PEGAR
      void modalElement.offsetWidth;

      modalElement.classList.add("showing");
    }

    const closeModalElement = document.querySelector(`.close-modal`);
    if (closeModalElement) closeModalElement.style.display = "block";
  }
}

function hideModal() {
  if (isMobile) {
    setActiveModal(null);

    document.querySelectorAll(`.key-modal.showing`).forEach((modal) => {
      modal.classList.remove("showing");

      // Aguarda fim da transição e esconde
      setTimeout(() => {
        modal.style.display = "none";
      }, 500); // MESMO TEMPO DO CSS
    });

    document.querySelectorAll(`.hover-text`).forEach((hoverText) => {
      hoverText.style.display = "none";
    });

    const closeModalElement = document.querySelector(`.close-modal`);
    if (closeModalElement) closeModalElement.style.display = "none";
  }
}


    return { activeModal, showModal, hideModal };
}

export default useModal;
