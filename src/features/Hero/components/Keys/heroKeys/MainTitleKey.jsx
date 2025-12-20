import React from "react";

function MainTitleKey({ t }) {
  return (
    <div className="hero-key key-accidental key-black">
      <div className="principal-title relative text-white w-full top-1/2 transform -translate-y-1/2 pl-4 lg:pl-0 lg:text-center">
        <h1 className="hero-title text-lg sm:text-3xl md:text-3xl lg:text-4xl drop-shadow-sm font-bold lg:mb-6 text-white limelight-regular">
          {t("main_title")}
        </h1>

        <h2 className="subtitle text-sm md:text-md lg:text-xl drop-shadow-sm font-bold lg:mb-6 text-white">
          {t("subtitle_1")},{" "}
          <span className="text-gray-medium font-light">
            {t("subtitle_2")},
          </span>{" "}
          {t("subtitle_3")}
        </h2>
      </div>
    </div>
  );
}

export default MainTitleKey;
