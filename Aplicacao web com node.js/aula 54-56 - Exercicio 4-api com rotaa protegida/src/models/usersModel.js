let storageUsers = [
  {
    name: "João Vitor Saraiva Sapori",
    email: "joao@email.com",
    password: "123456",
    role: "administrator",
  },
];
const userModel = {
  add(newUser) {
    // para negar truthy ou falsy basta usar !. Um objeto ate mesmo vazio  é um elemento truthy como array vazio tbm
    const isUniqueEmail = !storageUsers.find((user) => {
      return user.email === newUser.email; // se uma funcao n retona nada por padrao ela e undefined
    });

    if (!isUniqueEmail) {
      throw new Error("Email invalido");
    }
    storageUsers.push(newUser);
  },
  verifyCredencials(email, password) {
    const isValidEmail = storageUsers.find((user) => {
      return user.email === email;
    });
    const isValidPassword = storageUsers.find((user) => {
      return user.password === password;
    });
    if (!isValidEmail || !isValidPassword) {
      throw new Error("Credenciais inválidas");
    }
  },
  findUserByEmail(email) {
    const target = storageUsers.find((user) => user.email === email);
    return target;
  },
  getAllUsers() {
    const users = storageUsers;
    if (storageUsers.length === 0) {
      throw new Error("Não existe usuários");
    }
    return users;
  },
  deleteUser(email) {
    if (!email) {
      throw new Error("Email vazio");
    }
    const target = this.findUserByEmail(email);
    storageUsers = storageUsers.filter((user) => user.email !== target.email);
    return email;
  },
  createByAdm(user) {
    //verifica se é um obj vazio e se realmente é um obj
    if (!Object.keys(user).length === 0 && !obj.constructor === Object) {
      throw new Error("Dados vazios");
    }
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    };
    return storageUsers.push(newUser);
  },
};
module.exports = userModel;
