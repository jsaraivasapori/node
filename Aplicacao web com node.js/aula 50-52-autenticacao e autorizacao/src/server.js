const express = require("express");
const path = require("node:path");
const router = require("./routes.js");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "palavra-chave-secreta",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(router);

app.listen(3000, () => console.log("Servidor iniciado"));
