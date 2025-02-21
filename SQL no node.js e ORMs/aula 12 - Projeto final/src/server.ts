import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { router } from "./router";

dotenv.config();
const app = express();

app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Servidor iniciado em <http://localhost>:${PORT}/`)
);
