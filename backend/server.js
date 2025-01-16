const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(cors());

const generatePlaylist = (folderPath, baseUrl) => {
  if (!fs.existsSync(folderPath)) {
    return null;
  }

  try {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.mp3'));

    return files.map(file => {
      const formattedTitle = file
        .replace(/^[0-9]+-/, '')
        .replace(/-/g, ' ')
        .replace(/\.mp3$/, '');

      return {
        title: formattedTitle,
        artist: 'Artista Desconhecido',
        url: `${baseUrl}/${file}`,
      };
    });
  } catch (error) {
    console.error(`Erro ao gerar playlist: ${error.message}`);
    return null;
  }
};

const PORT = 3001;

const schema = buildSchema(`
  type Track {
    title: String
    artist: String
    url: String
  }

  type Query {
    playlist(playlistName: String): [Track]
  }
`);

const root = {
  playlist: ({ playlistName }) => {
    const folderPath = playlistName
      ? path.join(__dirname, 'assets/mp3', playlistName)
      : path.join(__dirname, 'assets/mp3');

    const baseUrl = playlistName
      ? `http://localhost:${PORT}/assets/mp3/${playlistName}`
      : `http://localhost:${PORT}/assets/mp3`;

    return generatePlaylist(folderPath, baseUrl) || [];
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use('/assets/mp3', express.static(path.join(__dirname, 'assets/mp3')));

app.listen(PORT, () => {
  console.log(`Servidor GraphQL rodando na porta ${PORT}`);
});
