const express = require("express");
const listaTarefasController = require("../controllers/listaTarefasController.js");
const router = express.Router();

//Rota página inicial OK
router.get("/", listaTarefasController.showHomePage);

//Rota para exibir todas as listas OK
router.get("/taskLists", listaTarefasController.showAllLists);

//Rota para criar nova lista de tarefa ok
router.post("/taskLists/create", listaTarefasController.createList);

//Rota para mostrar uma lista de tarefa especifica OK
router.get("/taskLists/:id", listaTarefasController.showList);

//Rota para adicionar tarefa a uma lista OK
router.post("/taskLists/:id/create", listaTarefasController.addTask);

//Rota para atualziar o status para concluido em uma tarefa ok
router.post(
  "/taskLists/:id/task/:idTask/complete",
  listaTarefasController.completeTask
);

//Rota para apagar uma tarefa
router.post(
  "/taskLists/:id/task/:idTask/delete",
  listaTarefasController.deleteTask
);

module.exports = router;
