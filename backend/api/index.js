require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");

const schema = require("../graphql/schema");
const resolvers = require("../graphql/resolvers");
const emailRoutes = require("../routes/emailRoutes");

const app = express();

// 🔥 Mantendo CORS sem alterar estrutura
app.use(cors());
app.use(express.json());

// 🔥 Log para Debug no Vercel
console.log("🛠️ SERVIDOR INICIADO");
console.log("📌 process.env.VERCEL:", process.env.VERCEL);
console.log("📌 process.env.NODE_ENV:", process.env.NODE_ENV);

// ✅ 🔥 Rota de Debug para Teste
app.get("/debug", (req, res) => {
  console.log("🔥 REQUISIÇÃO AO /debug");
  res.json({
    VERCEL: process.env.VERCEL || "Não definida",
    NODE_ENV: process.env.NODE_ENV || "Não definida",
    isLocal: process.env.VERCEL !== "1"
  });
});

// 🔥 Mantendo Rotas como Estavam
app.use("/api", emailRoutes);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// Servindo arquivos MP3 (sem alterações)
app.use("/assets/mp3", express.static(path.join(__dirname, "../assets/mp3")));

// 🔥 Exportar sem alterar estrutura
module.exports = app;
