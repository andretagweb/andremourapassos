import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import './index.css';

const Carousel = ({ items, renderItem }) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

  const scrollCarousel = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const updateButtonStates = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft <= 5);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    }
  };

  useEffect(() => {
    const checkVisibility = () => {
      if (carouselRef.current && carouselRef.current.scrollWidth > 0) {
        updateButtonStates();
      } else {
        setTimeout(checkVisibility, 50);
      }
    };

    checkVisibility();
    window.addEventListener("resize", updateButtonStates);
    return () => window.removeEventListener("resize", updateButtonStates);
  }, []);

  return (
    <div className="carousel-container relative w-full">
      {/* Botões de Navegação */}
      <div className="navigation-buttons flex justify-between absolute w-full top-1/2 transform -translate-y-1/2 px-2">
        <button
          onClick={() => scrollCarousel(-200)}
          className={`prev-button ${isAtStart ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isAtStart}
        >
          ◀
        </button>
        <button
          onClick={() => scrollCarousel(200)}
          className={`next-button ${isAtEnd ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isAtEnd}
        >
          ▶
        </button>
      </div>

      {/* Carrossel */}
      <div
        className="carousel flex overflow-x-auto scrollbar-hide space-x-4"
        ref={carouselRef}
        onScroll={updateButtonStates}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
