const sum = require("./sum");

console.log(`
  Soma usando CommonJS : ${sum(1, 2)}
  
`);

/* Se for usar ESM no package.json usar "type": "module" e exportar com export  e importar com import. 
    Não é possível usar CommonJS e ESModules no mesmo projeto
*/
