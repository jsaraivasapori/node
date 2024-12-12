const user = require("../models/usersModel.js");

module.exports = {
    //POST /auth/register
    register(req, res) {
        try {
            const { name, email, password } = req.body;
            const newUser = { name: name, email: email, password: password };
            const payload = user.createUser(newUser);
            res.status(201).json({ payload });
        } catch (error) {
            res.status(500).json({ message: `${error}` });
        }
    },
};
