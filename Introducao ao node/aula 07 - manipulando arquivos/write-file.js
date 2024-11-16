const fs = require("fs");
// metodo sincrono
// try {
//   fs.writeFileSync(
//     "./arquivo.txt",
//     "Minha primeira manipulacao de arquivo via node",
//     "utf-8"
//   );
//   console.log("Criado com sucesso");
// } catch (error) {
//   console.log("erro ao escrever o arquivo" + error.message);
// }

//metodo assincrono

const content = "Conteúdo do novo arquivo assíncrono";

fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("Erro ao escrever o arquivo: ", error.message);
    return;
  }

  console.log("Arquivo criado com sucesso de forma assíncrona.");
});
