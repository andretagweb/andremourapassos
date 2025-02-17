const { getPlaylist } = require("../controllers/playlistController");

const PORT = process.env.PORT || 3001;

module.exports = {
  playlist: ({ playlistName }) => getPlaylist(playlistName, PORT),
};
