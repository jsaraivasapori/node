const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    name: "João Vitor",
    email: "joao@email.com",
    password: "123456",
  },
  { id: uuidv4(), name: "John Doe", email: "john@email.com", password: "0000" },
];

module.exports = {
  getAllUsers() {
    return users;
  },
};
