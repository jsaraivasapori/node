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
        console.log(isUniqueEmail);

        if (!isUniqueEmail) {
            throw new Error("Email invalido");
        }
        return storageUsers.push(newUser);
    },
};
module.exports = userModel;
