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
    overflow: "visible",
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

  /* ===== DISCOGRAFIA ===== */

  sectionWrap: {
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "4.5rem 1rem",
  },

  sectionTitle: {
    fontSize: "1.9rem",
    letterSpacing: "0.12em",
    marginBottom: "3.2rem",
    opacity: 0.8,
    textTransform: "uppercase",
  },

  /* Grid base (álbuns) */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "4rem",
  },

  /* Grid mais contido (singles) */
  gridCompact: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2.8rem",
  },

  card: {
    background: "transparent",
    padding: 0,
    borderRadius: 0,
    boxShadow: "none",
    cursor: "default",
    userSelect: "text",
  },

  cardImage: {
    width: "100%",
    height: "auto",
    display: "block",
    marginBottom: "0.9rem",
    opacity: 0.95,
    filter: "grayscale(8%)",
  },

  cardSubtitle: {
    fontSize: "0.85rem",
    opacity: 0.6,
    letterSpacing: "0.06em",
  },

  cardSubtitleCompact: {
    fontSize: "0.8rem",
    opacity: 0.55,
    letterSpacing: "0.05em",
  },

  /* FOOTER */

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
