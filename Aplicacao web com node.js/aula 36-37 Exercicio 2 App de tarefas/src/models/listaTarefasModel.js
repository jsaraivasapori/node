const { v4: uuidv4 } = require("uuid");
let storageTasksLists = [
  {
    idTaskList: "fc038df2-bc91-4476-9cbc-c0b22e3bc29d",
    contentTaskList: [
      {
        idTask: "94314d29-d1ce-4588-a022-e0e5b3a02773",
        content: "fazer as malas",
        statusComplete: false,
      },
    ],
  },
  {
    idTaskList: "b071649f-0703-4e16-91d0-63f51c56a661",
    contentTaskList: [
      {
        idTask: "7dd87474-83da-49a0-8280-eccb47953d14",
        content: "sair com a namorada",
        statusComplete: false,
      },
      {
        idTask: "aa",
        content: "Fazer API do app To-List",
        statusComplete: false,
      },
    ],
  },
];

const listaTarefas = {
  getAllTaksLists() {
    return storageTasksLists;
  },
  createNewTaskList(content) {
    const taskList = {
      idTaskList: uuidv4(),
      contentTaskList: [
        {
          idTask: uuidv4(),
          content: content,
          statusComplete: false,
        },
      ],
    };
    storageTasksLists.push(taskList);
  },
  getListById(idList) {
    const index = storageTasksLists.findIndex(
      (list) => list.idTaskList === idList
    );
    const targetList = storageTasksLists[index];
    return targetList;
  },
  addTaskOnList(idList, newContent) {
    const list = this.getListById(idList);

    list.contentTaskList.push({ idTask: uuidv4(), content: newContent });
    console.log(JSON.stringify(storageTasksLists));
  },
  setCompleteTask(idList, idTask) {
    const list = this.getListById(idList);
    const index = list.contentTaskList.findIndex((elemnt) => {
      if (elemnt.idTask === idTask) {
        elemnt.statusComplete = true;
      }
    });
    return index;
  },
  deleteTask(idList, idTask) {
    const list = this.getListById(idList);
    list.contentTaskList = list.contentTaskList.filter(
      (task) => task.idTask !== idTask
    );
  },
};

module.exports = listaTarefas;
