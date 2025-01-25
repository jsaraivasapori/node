const express = require(express);

const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor iniciado em http://localhost:${PORT}`)
);
