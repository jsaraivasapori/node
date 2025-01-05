const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
  max: 2, //No maximo duas pool simultanea. mesmo q venha mais, a proxima conexao fica pendurada ate uma na pool finalizar
});

async function queryRapida() {
  const result = await pool.query("SELECT 1 + 1 AS soma"); // pool.query ja abre busca so uma query (mais de um n vai pq ai e com client) e fecha a pool automaticamente. isso é do PG
  console.log(result.rows[0]);
  setTimeout(() => {
    console.log("Fechando conexao...");
  }, 3000);
}

queryRapida();
queryRapida();
queryRapida();
