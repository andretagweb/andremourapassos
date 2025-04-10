const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = path.join(__dirname, '../src/features/Hero/assets/images'); // Ajuste o caminho se necessário
const outputFolder = path.join(__dirname, '../src/features/Hero/assets/images/optimized');

// Cria a pasta de saída se não existir
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  // Só processa arquivos de imagem
  if (/\.(jpe?g|png)$/i.test(file)) {
    console.log(`🔄 Redimensionando: ${file}...`);

    sharp(inputPath)
      .resize({ width: 2048 }) // Redimensiona para no máximo 2048px de largura
      .toFile(outputPath)
      .then(() => console.log(`✅ Imagem otimizada: ${file}`))
      .catch(err => console.error(`❌ Erro na imagem ${file}:`, err));
  }
});
