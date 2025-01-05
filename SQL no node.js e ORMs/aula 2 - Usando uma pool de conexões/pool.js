const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
  max: 2, //No maximo duas pool simultanea. mesmo q venha mais, a proxima conexao fica pendurada ate uma na pool finalizar
});

async function openConection() {
  const client = await pool.connect();

  const result = await client.query("SELECT 1 + 1 AS soma");
  console.log(result.rows);

  setTimeout(() => {
    client.release(); // liberando a conexao
    console.log("Liberando conexao da pool...");
  }, 8000);
}
openConection();
setTimeout(() => {
  openConection();
}, 3000);
setTimeout(() => {
  openConection();
}, 2000);
//Dessa forma consigo ttrabalhar com mais de uma conexao simultanea com o banco
