const fs = require("fs");
const path = require("path");

const generatePlaylist = (folderPath, baseUrl) => {
  if (!fs.existsSync(folderPath)) {
    return null;
  }

  try {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith(".mp3"));

    return files.map(file => ({
      title: file.replace(/^[0-9]+-/, "").replace(/-/g, " ").replace(/\.mp3$/, ""),
      artist: "Artista Desconhecido",
      url: `${baseUrl}/${file}`,
    }));
  } catch (error) {
    console.error(`Erro ao gerar playlist: ${error.message}`);
    return null;
  }
};

exports.getPlaylist = (playlistName, PORT) => {  

  const folderPath = playlistName
    ? path.join(__dirname, "../assets/mp3", playlistName)
    : path.join(__dirname, "../assets/mp3");

  // 🔥 Define a URL correta com base no ambiente
  const isLocal = process.env.VERCEL !== "1"; // Vercel define VERCEL=1 automaticamente

  const baseUrl = isLocal
    ? `http://localhost:${PORT}/assets/mp3/${playlistName || ""}`
    : `https://andremourapassos.vercel.app/assets/mp3/${playlistName || ""}`;

  return generatePlaylist(folderPath, baseUrl) || [];
};
