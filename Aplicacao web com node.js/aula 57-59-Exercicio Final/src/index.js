require("dotenv").config(); // configuraçao do dotenv
const express = require("express");
const authRouter = require("./routes/auth.js");
const apiRouter = require("./routes/api.js");
const errroMiddleware = require("./middlewares/errroMiddleware.js");
const app = express();

app.use(express.json());

app.use("/auth/", authRouter);
app.use("/api", apiRouter);
app.use(errroMiddleware);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor iniciado em <http://localhost>:${PORT}`)
);
