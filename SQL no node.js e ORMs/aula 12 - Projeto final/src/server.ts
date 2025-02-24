import { errorHandlerMiddleware } from "./middlewares/error-handler";

const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const { router } = require("./router");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

//middleware global de tratamento de erros
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Servidor iniciado em <http://localhost>:${PORT}/`)
);
