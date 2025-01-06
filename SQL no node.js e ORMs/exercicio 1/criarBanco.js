const { Client } = require("pg");

const client = new Client({
    connectionString: "postgresql://postgres:123456@localhost:5432/postgres",
});

async function criarBanco() {
    await client.connect();
    await client.query("CREATE DATABASE exercicio_1");
    await client.end();
}

criarBanco();
