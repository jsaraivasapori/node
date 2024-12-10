const userModel = require("../models/usersModel.js");

const authControler = {
  // POST /auth/register
  register(req, res) {
    const { name, email, password } = req.body;
    const newUser = {
      name: name,
      email: email,
      password: password,
      role: "standart",
    };
    userModel.add(newUser);
    res.status(201).json({ name: name, email: email, role: "standart" });
  },
  login(req, res) {},
};

module.exports = authControler;
