const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Permitir requisições de outros domínios
app.use(cors());

// Rota para listar os arquivos da pasta `mp3`
app.get('/api/playlist', (req, res) => {
  const mp3FolderPath = path.join(__dirname, 'assets/mp3'); // Pasta onde estão os arquivos

  // Lê os arquivos da pasta
  const files = fs.readdirSync(mp3FolderPath).filter(file => file.endsWith('.mp3'));

  // Cria uma lista de músicas
const playlist = files.map((file, index) => {
  // Remove números, hifens e a extensão .mp3
  const formattedTitle = file
    .replace(/^\d+-/, '') // Remove números e o primeiro hífen
    .replace(/-/g, ' ')  // Substitui os hifens restantes por espaços
    .replace(/\.mp3$/, ''); // Remove a extensão .mp3

  return {
    title: formattedTitle,
    artist: 'Artista Desconhecido',
    url: `http://localhost:3001/assets/mp3/${file}`,
  };
});


  // Retorna a playlist como JSON
  res.json(playlist);
});

// Servir os arquivos estáticos na pasta `assets/mp3`
app.use('/assets/mp3', express.static(path.join(__dirname, 'assets/mp3')));

// Inicia o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
