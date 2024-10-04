const express = require("express");
const router = require("./routes/router.js");
const cors = require("cors");
const sequelize = require("./db.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

// Sincronizando o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});