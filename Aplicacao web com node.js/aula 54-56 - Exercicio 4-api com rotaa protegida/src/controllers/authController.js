const userModel = require("../models/usersModel.js");

const authControler = {
    // POST /auth/register
    register(req, res) {
        try {
            const { name, email, password } = req.body;
            const newUser = {
                name: name,
                email: email,
                password: password,
                role: "standart",
            };
            console.log(newUser.email);
            userModel.add(newUser);

            res.status(201).json({
                name: name,
                email: email,
                role: "standart",
            });
        } catch (error) {
            res.status(500).json({ message: `${error}` });
        }
    },
    login(req, res) {},
};

module.exports = authControler;
