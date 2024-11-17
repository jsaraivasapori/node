const http = require("node:http");
const server = http.createServer((request, response) => {
  /* console.log(request);
  response.writeHead(200);
  //escrevo na stream
  response.write("Servidor HTTP em Node.js funcionando!");
  response.end(); // finalizo a stream*/
  const path = request.url;
  switch (path) {
    case "/":
      response.writeHead(200);
      response.write("Você está na página inicial!");
      break;
    case "/artigos":
      response.writeHead(200);
      response.write('Você está na página "artigos"!');
      break;
    default:
      response.writeHead(404);
      response.write("Caminho não encontrado!");
      break;
  }

  response.end();
});

// inicinado e configurando o servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Servidor rodando em localhost: " + PORT);
});
