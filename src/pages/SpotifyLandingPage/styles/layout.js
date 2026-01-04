export const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #191414, #121212)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4.5rem 1.5rem 3rem",
    position: "relative",
    zIndex: 0,
  },

  /* Wrapper neutro para o palco */
  heroWrapper: {
    width: "100%",
    position: "relative",

    /* neutraliza o padding vertical da page */
    marginTop: "-4.5rem",
    marginBottom: "-3rem",
  },

  topBar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1rem",
    zIndex: 1000,
    pointerEvents: "none",
  },

  homeButton: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 28,
    cursor: "pointer",
    pointerEvents: "auto",
  },

  /* HERO STAGE */
  heroStage: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "visible", // 🔥 ESSENCIAL PARA A HASTE APARECER
  },

  heroText: {
    position: "absolute",
    left: "1.5rem",
    bottom: "2.5rem",
    zIndex: 5,
    maxWidth: "640px",
  },

  scrollSpacer: {
    height: "50vh",
    width: "100%",
  },

  footer: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    justifyContent: "center",
    color: "#aaa",
    position: "relative",
    zIndex: 1,
  },
};
