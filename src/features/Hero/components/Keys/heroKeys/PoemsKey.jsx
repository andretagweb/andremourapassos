import React from "react";

function PoemsKey({ showModal, setNoPlaylistStatus, allTexts, Carousel, TextItem }) {
  return (
    <div
      id="poems"
      className="hero-key key-natural key-black non-playable"
      onMouseEnter={setNoPlaylistStatus}
      onClick={() => {
        showModal("poems");
      }}
    >
      <div className="key-image"></div>
      <div className="key-modal">
        <div className="key-videos hover-text text w-1/3 absolute left-[60%] transform -translate-y-1/2 p-5 rounded-lg text-center opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out text-black">
          <Carousel
            items={allTexts}
            renderItem={(text) => <TextItem text={text} />}
          />
          <br />
        </div>
      </div>
    </div>
  );
}

export default PoemsKey;
