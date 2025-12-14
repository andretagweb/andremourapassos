export const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #191414, #121212)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 1.5rem",
    position: "relative",
  },

  homeButton: {
    position: "absolute",
    top: 16,
    left: 16,
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 28,
    cursor: "pointer",
  },

  flags: {
    position: "absolute",
    top: 16,
    right: 16,
    display: "flex",
    gap: 8,
    alignItems: "center",
  },

  flagBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },

  hero: {
    textAlign: "center",
    marginTop: "3.5rem",
    marginBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    border: "2px solid #1DB954",
    marginBottom: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
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

  sectionWrap: {
    width: "100%",
    maxWidth: 1100,
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

  footer: {
    marginTop: "5rem",
    display: "flex",
    gap: "1.2rem",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "#aaa",
  },

  footerLink: {
    color: "#aaa",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
};
