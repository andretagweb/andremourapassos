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

  /* ===================== */
  /* TOPO FIXO */
  /* ===================== */

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

  flags: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    pointerEvents: "auto",
  },

  flagBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },

  /* ===================== */
  /* ABOVE THE FOLD */
  /* ===================== */

  aboveFold: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
  },

backgroundStage: {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
  overflow: "hidden", // 🔥 ESSENCIAL
},


  /* ===================== */
  /* HERO */
  /* ===================== */

  hero: {
    textAlign: "center",
    marginTop: "0rem",
    marginBottom: "4.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    border: "2px solid #1DB954",
    marginBottom: "2rem",
  },

  title: {
    fontFamily: "Limelight, serif",
    fontSize: "2.8rem",
    marginBottom: "1rem",
  },

  description: {
    maxWidth: 640,
    fontSize: "1.15rem",
    lineHeight: 0,
    color: "#cfcfcf",
    marginBottom: "2.2rem",
  },

  cta: {
    backgroundColor: "#1DB954",
    color: "rgb(111 3 3)",
    padding: "1.1rem 2.4rem",
    borderRadius: 36,
    fontSize: "1.1rem",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
  },

  /* ===================== */
  /* SEÇÕES */
  /* ===================== */

  scrollSpacer: {
    height: "50vh",
    width: "100%",
  },

  sectionWrap: {
    width: "100%",
    maxWidth: 1100,
    position: "relative",
    zIndex: 1,
  },

  sectionTitle: {
    textAlign: "center",
    fontFamily: "Limelight, serif",
    marginBottom: "2.5rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "2.2rem",
  },

  card: {
    background: "#0f0f0f",
    borderRadius: 18,
    padding: "1.4rem",
    textAlign: "center",
  },

  cardImage: {
    width: "100%",
    borderRadius: 14,
  },

  cardSubtitle: {
    fontSize: "0.85rem",
    color: "#aaa",
    marginBottom: "0.5rem",
  },

  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: "0.9rem",
    fontSize: "1.25rem",
  },

  /* ===================== */
  /* FOOTER */
  /* ===================== */

  footer: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "#aaa",
    position: "relative",
    zIndex: 1,
  },

  footerLink: {
    color: "#aaa",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
};
