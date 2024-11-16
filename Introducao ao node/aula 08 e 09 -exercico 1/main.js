const utils = require("./functions.js");
const caminho = "./meuArquivo.txt";
utils.criarArquivo(caminho, "Teste");
utils.reescreverArquivo(caminho, "Arquivo reescrito");
utils.lerArquivo(caminho);
utils.excluirArquivo(caminho);
