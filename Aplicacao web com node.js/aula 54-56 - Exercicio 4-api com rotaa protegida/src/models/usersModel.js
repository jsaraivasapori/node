let storageUsers = [
  {
    name: "João Vitor Saraiva Sapori",
    email: "joao@email.com",
    password: "123456",
    role: "administrator",
  },
];
const userModel = {
  add(user) {
    storageUsers.push(user);
  },
};
module.exports = userModel;
