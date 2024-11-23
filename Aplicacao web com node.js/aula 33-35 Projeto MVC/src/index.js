const express = require("express");
const path = require("node:path");
const router = require("./routes");
const app = express();
//configuracao do ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//fim da configuracao do ejs

//configuracao para servir os arquivos estaticos na pasta public
app.use(express.static("public"));
//fim
//configuracao do urlencoder
app.use(express.urlencoded({ extended: true }));
//fim

//Rotas da aplicação
app.use(router);
const PORTA = process.env.PORTA || 3000;
app.listen(PORTA, () => {
  console.log(`Servidor iniciado localhost:${PORTA}`);
});
