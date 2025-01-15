const { query } = require("./db.js");

const queryString = `
  CREATE TABLE IF NOT EXISTS events(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  total_tickts INT NOT NULL,
  sold_tickts INT NOT NULL DEFAULT 0

);
`;

async function createTable(connectionString, params) {
  await query(connectionString, params);
  console.log("Tabele Criada");
}

createTable(queryString);
