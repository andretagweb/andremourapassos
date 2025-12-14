export const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #191414, #121212)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    /* espaço para top bar fixa */
    padding: "4.5rem 1.5rem 3rem",

    /* cria stacking context */
    position: "relative",
    zIndex: 0,
  },

  backgroundStage: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%", // cobre toda a área de conteúdo
  overflow: "hidden", // 👈 CORTA A HASTE
  zIndex: 0,
  pointerEvents: "none",
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

    /* não bloqueia cliques abaixo */
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
  /* HERO */
  /* ===================== */

  hero: {
    textAlign: "center",
    marginTop: "0rem",
    marginBottom: "4.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    /* garante que fique acima do fundo */
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
    lineHeight: 1.7,
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
  },

  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: "0.9rem",
    fontSize: "1.25rem",
  },

  scrollSpacer: {
    height: "10vh", // empurra os álbuns para fora da primeira visão
    width: "100%",
  },

  aboveFold: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },

  belowFold: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    paddingTop: "4rem",
  },


  /* ===================== */
  /* FOOTER */
  /* ===================== */

  footer: {
    marginTop: "5rem",
    display: "flex",
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
