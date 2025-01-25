const { query } = require("./db.js");
const { getEventByName } = require("./getEventByName.js");

async function canSell(name) {
  const { rows } = await getEventByName(name);

  const dateEvent = new Date(rows[0].date);
  const today = new Date();
  if (dateEvent < today || rows[0].sold_tickts >= rows[0].total_tickts) {
    return false;
  }
  console.log(rows[0]);

  return true;
}
async function sellTicket(name) {
  const canSellResult = await canSell(name);

  if (!canSellResult) {
    console.log("Erro ao vender, sem tickts ou ja passou");
    process.exit(0);
  }
  await query(
    `UPDATE events
      SET sold_tickts = sold_tickts + 1
      WHERE name = $1;`,
    [name]
  );
  process.exit(0);
}

sellTicket("Test2");
