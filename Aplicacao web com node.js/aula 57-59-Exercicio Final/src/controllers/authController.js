const users = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");
const bcrypte = require("bcrypt");
module.exports = {
  //POST /auth/register
  register(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = { name: name, email: email, password: password };
      const payload = users.createUser(newUser);
      res.status(201).json({ payload });
    } catch (error) {
      res.status(500).json({ message: `${error}` });
    }
  },
  login(req, res) {
    try {
      const { email, password } = req.body;
      if (typeof email !== "string" || typeof password !== "string") {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      const existingUser = users.getUserByEmail(email);
      console.log("Senha criptografada com bcrypt:", existingUser.password);
      const isValidPassword = bcrypte.compareSync(
        password,
        existingUser.password
      );
      if (!existingUser || !isValidPassword) {
        res.status(401).json({ message: "Credenciais inválidas" });
      }
      const payload = {
        id: existingUser.id,
        email: existingUser.email,
      };
      const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
      return res.status(200).json({ token: token });
    } catch (error) {
      res.status(404).json({ message: `${error}` });
    }
  },
};
