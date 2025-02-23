const express = require("express");
const userRouter = require("./routers/userRouter.js");
const postRouter = require("./routers/postRouter.js");
const searchRouter = require("./routers/searchRouter.js");
const tagRouter = require("./routers/tagRouter.js");

const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api/posts", searchRouter);
app.use("/api", postRouter);
app.use("/api", tagRouter);

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
