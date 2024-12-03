const express = require("express");
const uploadMilddlewares = require("../middlewares/upload");

const app = express();

app.post("/upload", uploadMilddlewares.single("image"), (req, res) => {
  console.log(req.file, req.body);
  res.json({ messagem: "Arquivo Salvo com Sucesso" });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor online em localhost:${PORT}`);
});

/*
//app.use e o meotdo para registrar middlewares de forma global na aplicação
app.use(function (req, res, next) {
  req.middlewareA = "OK!";
  next();
});

function middlewareB(req, res, next) {
  console.log("Executando o middle B");

  req.middlewareB = "OK!";
  next();
}
// posso passar o middleware dentro da rota, mais de um no caso porem a ordem importa
app.get("/teste", middlewareB, (req, res) => {
  console.log("Executando o middle a");

  console.log({ a: req.middlewareA, b: req.middlewareB });
  res.end();
});
app.get("/teste2", (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB });
  throw new Error("Algo deu errado aqui");
  res.end();
});

//setando middleware de erro para a aplicção toda
app.use(function (err, req, res, next) {
  if (err) {
    console.log(err.message);
    res.status(400);
    res.json({ message: err.message });
  } else {
    next();
  }
});
*/
