const fs = require("node:fs");

//metodo assincrono manipulacao csv

fs.readFile("./arquivo.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Erro ao ler o arquivo: ", error.message);
    return;
  }

  const entries = data.split(",");
  console.log(entries);
  entries.forEach((entry) => console.log(entry));
});

// metodo assincrono geral

/*fs.readFile("./arquivo.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Erro ao ler arquivo :" + error.message);
  }
  console.log(`Dados lidos : ${data}`);
});
*/

//metodo sincrono

/*try {
  const data = fs.readFileSync("./arquivo.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log("Erro ao ler o arquivo: ", error.message);
}
*/
