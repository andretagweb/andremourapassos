import React from "react";

export default function CocktailBackground({ children }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const cupWidth = isMobile ? 340 : 420;
  const cupHeight = isMobile ? 280 : 320;
  const cupTopOffset = isMobile ? 64 : 72;
  const scale = isMobile ? 1.15 : 1.25;

  const scaledCupWidth = cupWidth * scale;
  const halfScaledCup = scaledCupWidth / 2;

  // 🔥 eixo X central do copo (mobile, sem transform)
  const mobileCupCenterOffset = cupWidth / 2;

  // 🔥 onde o copo termina (mobile)
  const mobileStemTop = cupTopOffset + cupHeight;

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: 0,
        right: isMobile ? "45%" : 0,
        marginRight: isMobile ? `-${halfScaledCup}px` : 0,
        width: `${scaledCupWidth + 80}px`,
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
        overflow: "visible",
      }}
    >
      {/* COPO */}
      <div
        style={{
          position: "absolute",
          top: `${cupTopOffset}px`,
          right: isMobile ? "50%" : "40px",
          marginRight: isMobile ? `-${halfScaledCup}px` : 0,
          transform: isMobile ? "none" : `scale(${scale})`,
          transformOrigin: "top center",
          width: `${cupWidth}px`,
          height: `${cupHeight}px`,
          border: "3px solid #8b0000",
          borderTop: "none",
          borderRadius: "0 0 210px 210px",
          background:
            "linear-gradient(to top, rgba(140,0,0,0.35), rgba(255,80,80,0.15))",
          pointerEvents: "auto",
          zIndex: 2,
        }}
      >
        {/* LÍQUIDO */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "48%",
            background: "linear-gradient(to top, #6b0000, #b11226)",
            borderRadius: "0 0 210px 210px",
            opacity: 0.9,
          }}
        />

        {/* BOTÕES */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "4%",
            right: "4%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.9rem",
            zIndex: 2,
          }}
        >
          {children}
        </div>
      </div>

      {/* HASTE */}
      <div
        style={{
          position: "absolute",

          // 🔥 começa exatamente onde o copo termina (mobile)
          top: isMobile
            ? `${mobileStemTop -12}px`
            : `${cupTopOffset + cupHeight * scale - 5}px`,

          // 🔥 alinhada ao centro do copo
          right: isMobile
            ? "78%"
            : `${-10 + scaledCupWidth / 2 - 4}px`,
          marginRight: isMobile
            ? `-${mobileCupCenterOffset}px`
            : 0,

          transform: "none",

          width: "8px",
          height: "120vh",
          background: `
            linear-gradient(
              to bottom,
              rgba(200,40,40,0.95) 0%,
              rgba(160,20,20,0.75) 25%,
              rgba(120,0,0,0.45) 55%,
              rgba(60,0,0,0.2) 75%,
              rgba(0,0,0,0) 100%
            )
          `,
          boxShadow: "0 0 12px rgba(200,40,40,0.35)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
