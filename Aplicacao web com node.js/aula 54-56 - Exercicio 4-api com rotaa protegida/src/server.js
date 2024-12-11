const express = require("express");
const authRouter = require("./routes/authRoute.js");
const protectedRouter = require("./routes/protectedRoute.js");
const homeRoute = require("./routes/homeRoute.js");
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);
app.use(homeRoute);
app.listen(3000, () => {
  console.log("Servidor rodando a pleno em localhost:3000");
});
