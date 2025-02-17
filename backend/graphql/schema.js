const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Track {
    title: String
    artist: String
    url: String
  }

  type Query {
    playlist(playlistName: String): [Track]
  }
`);
