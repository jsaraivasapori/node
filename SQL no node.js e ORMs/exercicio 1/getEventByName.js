const { query } = require("./db.js");

async function getEventByName(name) {
  const queryString = `
  SELECT * FROM events WHERE name = $1;
  `;
  const params = [name];
  const response = await query(queryString, params);

  return response;
}

module.exports = { getEventByName };
getEventByName("KnotFest");
