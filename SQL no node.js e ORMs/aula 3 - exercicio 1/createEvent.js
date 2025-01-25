const { query } = require("./db.js");

async function createEvent(name, date, total_tickts) {
  const queryString = `
  INSERT INTO events (name,date,total_tickts) VALUES ($1,$2,$3);`;
  const params = [name, date, total_tickts];
  await query(queryString, params);
  console.log(
    `O evento ${name}, foi criado para a data ${date}, total de ingressos de ${total_tickts}`
  );
  process.exit(0);
}

// createEvent("Baile das Santinhas", "2025/08/07", 15000);
// createEvent("Exposição", "2025/06/28", 250000);
createEvent("Test3", "2025/01/15", 1);
