const { log } = require("node:console");
const pg = require("pg");

// Connection String: protocolo_bd://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
  connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
});

async function createTable() {
  await db.connect();

  const query = `
    CREATE TABLE IF NOT EXISTS "public"."POKEMON"(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255)
    )
  `;
  const result = await db.query(query);
  console.log(result);

  await db.end();
}

createTable();
