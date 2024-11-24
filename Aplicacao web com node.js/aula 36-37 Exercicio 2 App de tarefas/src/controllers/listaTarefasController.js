const listaTarefas = require("../models/listaTarefasModel.js");
const listaTarefasModel = require("../models/listaTarefasModel.js");
const listaTarefasController = {
  showHomePage(req, res) {
    res.render("index");
  },
  showAllLists(req, res) {
    listasTarefas = listaTarefasModel.getAllTaksLists();
    res.json(listasTarefas);
  },
  createList(req, res) {
    try {
      const contentTaskList = req.body.content;
      novaListaTarefa = listaTarefasModel.createNewTaskList(contentTaskList);
      res.send("Lista criada com sucesso");
    } catch (erro) {
      res.send("Erro interno ao criar a lista");
      console.log(erro);
    }
  },
  showList(req, res) {
    // Lógica para exibir as tarefas de uma lista específica

    try {
      const idList = req.params.id;
      const lista = listaTarefasModel.getListById(idList);
      res.json(lista);
    } catch (error) {
      console.log(error);
      res.send("Erro ao servir a lista");
    }
  },
  addTask(req, res) {
    try {
      const idList = req.params.id;
      const newtask = req.body;
      newList = listaTarefas.addTaskOnList(idList, newtask);
      res.send("Tarefa inserida");
    } catch (error) {
      console.log(error);
      res.send("Erro ao inserir a tarefa");
    }
  },
  completeTask(req, res) {
    // Lógica para marcar uma tarefa como concluída
    try {
      const idList = req.params.id;
      const idTask = req.params.idTask;
      listaTarefasModel.setCompleteTask(idList, idTask);
      res.send("Tarefa finalizada");
    } catch (error) {
      console.log(error);
      res.send("Erro ao finalizar");
    }
  },
  deleteTask(req, res) {
    // Lógica para excluir uma tarefa
    try {
      const idList = req.params.id;
      const idTaskToDelete = req.params.idTask;
      listaTarefasModel.deleteTask(idList, idTaskToDelete);
      res.send("Sucesso ao excluir");
    } catch (error) {
      console.log(error);
      res.send("Erro ao excluir");
    }
  },
};

module.exports = listaTarefasController;
