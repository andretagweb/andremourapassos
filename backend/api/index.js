require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");

const schema = require("../graphql/schema");
const resolvers = require("../graphql/resolvers");
const emailRoutes = require("../routes/emailRoutes");

const app = express();

// ✅ 🔥 Corrigindo CORS corretamente para permitir Netlify
const allowedOrigins = [
  "https://andremourapassos.netlify.app", // Frontend em produção
  "http://localhost:3000" // Para testes locais
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

// API REST para envio de e-mails
app.use("/api", emailRoutes);

// GraphQL API para playlists
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// Servir arquivos MP3
app.use("/assets/mp3", express.static(path.join(__dirname, "../assets/mp3")));

// 🔥 Exportar a função para rodar no Vercel
module.exports = app;
