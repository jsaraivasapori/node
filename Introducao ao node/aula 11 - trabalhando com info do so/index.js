const os = require("node:os");

const plataform = os.platform();
console.log(`Plataforma do SO: ${plataform}`);

const arch = os.arch();
console.log(`A arquitetura do SO: ${arch}`);

const threads = os.cpus();
console.log("Informacoes da CPU:" + threads.length);

const memoriaTotal = os.totalmem();

console.log("Total de memóeria do PC :" + memoriaTotal / 1024 ** 3 + " Gb");

const memoriaLivre = os.freemem();
console.log("Mmeoria disponivel: " + memoriaLivre / 1024 ** 3 + " Gb");
