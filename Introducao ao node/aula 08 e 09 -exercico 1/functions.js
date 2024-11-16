const { error, log } = require("node:console");
const fs = require("node:fs");

function criarArquivo(caminho, conteudo) {
  fs.writeFile(caminho, conteudo, "utf-8", (error) => {
    if (error) {
      console.log("Erro ao criar arquivo: " + error.message);
    }
    console.log("Sucesso ao criar o arquivo");
  });
}

function reescreverArquivo(caminho, novoConteudo) {
  fs.writeFile(caminho, novoConteudo, "utf-8", (error) => {
    if (error) {
      console.log("Erro ao reescrever o arquivo : " + error.message);
    }
    console.log("Sucesso ao reescrever o arquivo ");
  });
}

function lerArquivo(caminho) {
  fs.readFile(caminho, "utf-8", (error, data) => {
    if (error) {
      console.log("Erro ao ler o arquivo : " + error.message);
    }
    console.log(data);
  });
}
function excluirArquivo(caminho) {
  fs.unlink(caminho, (error) => {
    if (error) {
      throw error;
    }
    console.log(caminho + ", deletado");
  });
}
module.exports = {
  criarArquivo,
  reescreverArquivo,
  lerArquivo,
  excluirArquivo,
};
