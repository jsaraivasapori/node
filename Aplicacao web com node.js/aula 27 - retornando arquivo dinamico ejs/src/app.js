const express = require("express");
const path = require("node:path");
const app = express();

app.set("view engine", "ejs"); //defini a engine de view
app.set("views", path.join(__dirname, "views")); // templates ejs ta no caminho informado

app.get("/", (req, res) => {
  const title = "Homepage";
  const message = "Mensagem dinâmica inserida pelo EJS pelo back-end";
  res.render("index", { title, message });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Servidor iniciado"));
