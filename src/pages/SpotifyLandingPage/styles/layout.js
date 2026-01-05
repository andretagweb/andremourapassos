export const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #191414, #121212)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4.5rem 1.5rem 3rem",
    position: "relative",
    zIndex: 0,

    /* 🔒 segurança extra contra vazamento horizontal */
    overflowX: "hidden",
  },

  heroWrapper: {
    width: "100%",
    position: "relative",
    marginTop: "-4.5rem",
    marginBottom: "-3rem",
  },

  topBar: {
    position: "fixed",
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1rem",
    zIndex: 99999,

    transform: "translateZ(0)",
    willChange: "transform",
    pointerEvents: "none",
  },

  homeButton: {
    background: "none",
    border: "none",
    color: "#a80b0b",
    fontSize: 28,
    cursor: "pointer",
    pointerEvents: "auto",
  },

  heroStage: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "visible",
  },

  heroText: {
    position: "fixed",
    left: "2.5rem",
    bottom: "2.5rem",
    zIndex: 5,
    maxWidth: "640px",
  },

  flagBtn: {
    marginLeft: "0.5rem",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 28,
    cursor: "pointer",
    pointerEvents: "auto",
  },

  scrollSpacer: {
    height: "50vh",
    width: "100%",
  },

  sectionWrap: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4.5rem 1rem",
  },

  sectionTitle: {
    fontSize: "1.9rem",
    letterSpacing: "0.12em",
    marginBottom: "3.5rem",
    opacity: 0.8,
    textTransform: "uppercase",
    textAlign: "right",
  },

  verticalListRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "5rem",
  },

  albumItem: {
    maxWidth: "320px",
    textAlign: "right",
  },

  singleItem: {
    maxWidth: "320px",
    textAlign: "right",
    opacity: 0.85,
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

  footer: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1.2rem",
    color: "#aaa",
    position: "relative",
    zIndex: 1,
    paddingRight: "1rem",
  },

  footerLinksRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  footerLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    color: "#aaa",
    textDecoration: "none",
    fontSize: "0.85rem",
    opacity: 0.75,
  },

  footerMusicLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    color: "#ff2020",
    textDecoration: "none",
    fontSize: "0.85rem",
    opacity: 0.75,
  },
  footerDivider: {
    width: "100%",
    maxWidth: "420px",
    height: "1px",
    alignSelf: "flex-end",
    margin: "0.5rem 0 0.75rem",
    background: "linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0))",
    opacity: 0.8,
  },
  copyrightText: {
    marginTop: "1rem",
    fontSize: "0.75rem",
    color: "#777",
    textAlign: "right",
    letterSpacing: "0.3px",
  }

};
