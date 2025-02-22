require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { graphqlHTTP } = require("express-graphql");

const schema = require("../graphql/schema");
const resolvers = require("../graphql/resolvers");
const emailRoutes = require("../routes/emailRoutes");

const app = express();

app.use(cors());
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

// Exportar a função de manipulação para o Vercel
module.exports = app;
