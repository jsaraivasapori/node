const fs = require("node:fs");
const os = require("node:os");

function adicionarInfo(data) {
  const isLogPaste = fs.access("./log", (error) => {
    if (error) {
      console.log(error.message);
    }
  });
  if (!isLogPaste) {
    fs.mkdir("./log", () => {
      console.log("Diretório criado com sucesso!");
    });
  }
  fs.appendFile("./log/log.txt", data, "utf-8", (error) => {
    if (error) {
      console.log("Erro ao adicionar " + error.message);
    }
  });
}
function monitoramento() {
  const nomeSistem = os.platform();
  const arquitetura = os.arch();
  const modeloProcessador = os.cpus()[0].model;
  const usoMemoria = (1 - os.freemem() / os.totalmem()) * 100;

  const log = {
    SO: nomeSistem,
    Arquitetura: arquitetura,
    Porcessador: modeloProcessador,
    UsoMmeoria: usoMemoria.toFixed(2) + "%",
  };

  console.log(log);
  return JSON.stringify(log);
}

function executarPorSegundo() {
  setInterval(() => adicionarInfo("\n" + monitoramento()), 1000);
}

module.exports = { adicionarInfo, monitoramento };
executarPorSegundo();
