const { query } = require("./db.js");

async function getAllEvents() {
  console.log("Pesquisando...");

  const response = await query(`SELECT * FROM events ORDER BY date ASC`);
  console.table(response.rows);
  process.exit(0);
}

getAllEvents();
