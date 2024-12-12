const { v4: uuidv4 } = require("uuid");
const users = [
    {
        id: uuidv4(),
        name: "João Vitor",
        email: "joao@email.com",
        password: "123456",
    },
    {
        id: uuidv4(),
        name: "John Doe",
        email: "john@email.com",
        password: "0000",
    },
];

module.exports = {
    getAllUsers() {
        return users;
    },
    getUserById(id) {
        const target = users.find((user) => {
            user.id === id;
        });
        return target;
    },
    getUserByEmail(email) {
        const target = users.find((user) => {
            user.email === email;
        });
        return target;
    },
    crateUser(name, email, password) {
        if (!name || name.length < 4) {
            throw new Error("Nome inválido");
        }
        if (!email || !email.includes("@")) {
            throw new Error("Email inválido");
        }
        if (!password || password.length < 6) {
            throw new Error("Senha inválida");
        }
        const newUser = {
            id: uuidv4(),
            name: name,
            email: email,
            password: password,
        };
        users.push(newUser);
        return { id: newUser.id, name: newUser.name, email: newUser.name };
    },
};
