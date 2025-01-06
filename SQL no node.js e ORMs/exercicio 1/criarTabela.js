const { Client } = require("pg");

const client = new Client({
    connectionString: "postgresql://postgres:123456@localhost:5432/exercicio_1",
});

async function criarTabela() {
    await client.connect();
    const query = `
    CREATE TABLE IF NOT EXISTS eventos(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    total_ingressos INT,
    ingressos_vendidos INT DEFAULT 0
    )
    `;
    const result = await client.query(query);
    console.log(result);
    client.end();
    console.log("Conexão fechada");
}

criarTabela();
