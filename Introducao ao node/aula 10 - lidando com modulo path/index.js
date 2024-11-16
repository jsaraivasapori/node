const path = require("node:path");
/*
Path e seguro para lidar com diretorios independente do so
path.join(): Combina segmentos de caminho em um único caminho independente do SO.

path.resolve(): Resolve um caminho absoluto a partir de segmentos de caminho dados.

path.basename(): Retorna o nome do arquivo ou diretório de um caminho.

path.dirname(): Retorna o diretório pai de um caminho.

path.extname(): Retorna a extensão do arquivo de um caminho.
*/

const dir = "src";
const file = "app.js";

const fullPath = path.join(__dirname, dir, file);
const relativePath = path.join(".", dir, file);
/*console.log(fullPath);
console.log(relativePath); // mesmo com o ponto n incluiu o diretorio raiz de onde executa q e aula 10-lidando com path
*/
const relativePath2 = "../arquivos/relatorio.pdf";
const absolutePath2 = path.resolve(__dirname, relativePath); // vai voltar um diretorio
console.log(absolutePath2);
const fileName = path.basename(relativePath);
console.log(fileName);

const ext = path.extname(absolutePath2);

console.log(ext);
