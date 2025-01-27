const express = require("express");
const router = require("./router.js");

const app = express();

app.use(express.json());
app.use("/api", router);

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
