import React from "react";

export default function CocktailBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: "75%",
        left: "50%",

transform: "translate(-50%, -10%) scale(1.8)",
        transformOrigin: "bottom center",

        width: "520px",
        height: "1400px", // 👈 container mais alto para acompanhar a página longa

        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.45,
      }}
    >
      {/* Copo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "360px",
          height: "260px",
          border: "3px solid #8b0000",
          borderTop: "none",
          borderRadius: "0 0 180px 180px",
          background:
            "linear-gradient(to top, rgba(140,0,0,0.25), rgba(255,80,80,0.12))",
        }}
      >
        {/* Líquido camada 1 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "45%",
            background: "linear-gradient(to top, #6b0000, #b11226)",
            borderRadius: "0 0 180px 180px",
            opacity: 0.8,
          }}
        />

        {/* Líquido camada 2 */}
        <div
          style={{
            position: "absolute",
            bottom: "45%",
            left: 0,
            width: "100%",
            height: "20%",
            background: "linear-gradient(to top, #2a0000, #5c0a12)",
            opacity: 0.65,
          }}
        />

        {/* Reflexo do vidro */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "18%",
            width: "18px",
            height: "65%",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Haste longa com fade progressivo */}
      <div
        style={{
          position: "absolute",
          top: "260px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "6px",
          height: "980px", // 👈 MUITO mais longa
          background: `
            linear-gradient(
              to bottom,
              rgba(139,0,0,0.95) 0%,
              rgba(110,0,0,0.7) 25%,
              rgba(80,0,0,0.45) 45%,
              rgba(40,0,0,0.25) 65%,
              rgba(20,0,0,0.12) 80%,
              rgba(0,0,0,0) 100%
            )
          `,
        }}
      />

      {/* Halo artístico */}
      <div
        style={{
          position: "absolute",
          inset: "-30%",
          background:
            "radial-gradient(circle at center, rgba(140,0,0,0.15), transparent 65%)",
        }}
      />
    </div>
  );
}
