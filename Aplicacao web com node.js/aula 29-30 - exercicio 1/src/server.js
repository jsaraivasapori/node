const express = require("express");
const path = require("node:path");
const utils = require("./utils");
const app = express();
let storageEmails = [];

//Inicio  da configuracao do EJS

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Fim da configuracao do EJS

//Inicio da configuracao das requests para usar urlencoded

app.use(express.urlencoded({ extended: true }));

//Fim da configuracao das requests para usar urlencoded

//Inico das rotas

app.get("/", (req, res) => {
  res.redirect("/form");
});

app.get("/form", (req, res) => {
  res.render("./form");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  storageEmails.push({ email });
  utils.gerarListaComId(storageEmails);
  console.log(storageEmails);
  res.redirect("./sucess");
});

app.get("/sucess", (req, res) => {
  res.render("./sucess");
});

app.get("/emails", (req, res) => {
  res.render("./lista", { emails: storageEmails });
});

app.post("/emails/delete", (res, req) => {
  const lego = res.body;
  storageEmails = storageEmails.filter((item) => item !== lego);
  req.redirect("/emails");
});
//Fim das rotas

//Inicio do script de star do servidor

const PORTA = 3000;

app.listen(PORTA, (req, resp) => {
  console.log(`Servidor rodando em localhost: ${PORTA}`);
});
