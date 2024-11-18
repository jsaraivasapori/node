const express = require("express");

const server = express();

//Essa rota responderá apenas a requisições HTTP GET para o caminho "/"
server.get("/", (request, response) => {
  response.send("Servidor Express funcionando \nVocê está na página inicial");
});

server.get("/artigos", (req, res) => {
  res.send("Metodo GET para a rota /artigos acessado");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor Express iniciado em localhost:${PORT}`);
});
