const express = require("express");
const path = require("node:path");
const router = require("./routes/listaTarefaRoutes.js");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(router);
const PORT = 3000;
app.listen(PORT, () =>
  console.log(
    `Servidor rodando em https://localhost${PORT}. Aguardando requisições`
  )
);
