const pg = require("pg");

// Connection String: protocolo_bd://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
  connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
});

async function insertPokemon() {
  await db.connect();

  // Forma básica
  const query = `
    INSERT INTO "public".pokemon (name,type) VALUES ('Sprigatito','GRASS')
  `;
  const result1 = await db.query(query);

  // Dados dinâmicos da forma ERRADA. gera falha de segurança possivel sql injection

  // const name = "Fuecoco";
  // const type = "Fogo";
  // const result2 = await db.query(
  //   `INSERT INTO pokemon (name, type) VALUES ('${name}', '${type}');`
  // );
  // console.log(result2);

  // Dados dinâmicos da forma CORRETA
  const pokemon = { name: "Quaxly", type: "Água" };
  const result3 = await db.query(
    `INSERT INTO pokemon (name, type) VALUES ($1, $2);`,
    [pokemon.name, pokemon.type]
  );
  console.log(result3);
  db.end();
}

insertPokemon();
