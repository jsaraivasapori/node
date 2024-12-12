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
        const target = users.find((user) => user.id === id);
        return target;
    },
    getUserByEmail(email) {
        console.log(
            "email recebido em getuserbyemail:",
            email,
            "typeof:",
            typeof email
        );

        const target = users.find((user) => user.email === email);
        console.log(target);
        return target;
    },
    createUser({ name, email, password }) {
        if (!name || name.length < 4 || typeof name !== "string") {
            console.log("erro if do name");

            throw new Error("Nome inválido");
        }
        if (!email || !email.includes("@") || typeof email !== "string") {
            console.log("erro if do email");
            throw new Error("Email inválido");
        }
        if (!password || password.length < 6 || typeof password !== "string") {
            console.log("erro if da password");
            throw new Error("Senha inválida");
        }
        const isValidUser = this.getUserByEmail(email);

        if (isValidUser) {
            throw new Error("Email já cadastrado");
        }
        const newUser = {
            id: uuidv4(),
            name: name,
            email: email,
            password: password,
        };
        users.push(newUser);
        return { id: newUser.id, name: newUser.name, email: newUser.email };
    },
};
