const express = require("express");
const authRouter = require("./routers/auth");
const protectedRouter = require("./routers/protected");
const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/protected", protectedRouter);
app.listen(3000, () => console.log("Servidor rodando em localhost:3000"));
