const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
  max: 3,
});

async function query(queryString, params) {
  return pool.query(queryString, params);
}

module.exports = { query };
