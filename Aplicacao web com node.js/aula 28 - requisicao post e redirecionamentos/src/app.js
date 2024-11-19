const express = require("express");
const path = require("node:path");

const app = express();
const storageUsers = [];
//Configuracao do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Configuracao do body
app.use(express.urlencoded({ extended: true })); // para trabalhar com envio e receber dados pela url
//rotas
app.get("/", (req, res) => {
  res.send("Servidor rodando a pleno");
});

app.get("/formulario", (req, res) => {
  res.render("form");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  storageUsers.push({ username });
  res.redirect("/usuarios");
});

app.get("/usuarios", (req, res) => {
  res.render("users", { users: storageUsers });
});
// fim rotas

const PORTA = 3000;

app.listen(3000, () => {
  console.log("Servidor rodando na porta " + PORTA);
});
