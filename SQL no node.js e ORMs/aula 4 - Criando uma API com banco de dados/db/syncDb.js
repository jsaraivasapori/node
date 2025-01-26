const QueryDb = require("./QueryDb.js");

async function syncDb() {
  await QueryDb.query(
    `
  CREATE TABLE products(
    id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      stock_quantity INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_active BOOLEAN DEFAULT TRUE
  );
  `
  );
  console.log("Tabela products criada");
  process.exit(0);
}

syncDb();
