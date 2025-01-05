const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
});

async function openConnection() {
  await client.connect();
  const result = await client.query("SELECT 1+1 AS resultado");
  console.log(result.rows);

  setTimeout(() => {
    client.end();
    console.log("Fechadno conexao");
  }, 5000);
}

openConnection();
openConnection();
//Dara erro pq eu estou tetnando abrir mais de uma conexao ao mesmo tempo.
//Com essa abordagem so é possivel usando pool de conexoes
