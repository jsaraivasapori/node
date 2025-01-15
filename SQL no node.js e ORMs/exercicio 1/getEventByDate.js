const { query } = require("./db.js");

async function getEventByDate(date) {
  console.log("Buscando...");
  const queryString = `
  SELECT * FROM events WHERE date = $1;
  `;
  const params = [date];
  const response = await query(queryString, params);
  console.table(response.rows);
}

getEventByDate("2025-10-09");
