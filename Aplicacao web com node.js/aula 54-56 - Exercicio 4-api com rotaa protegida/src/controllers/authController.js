const userModel = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");

const secretKey = "eu amo gatos";
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
  login(req, res) {
    try {
      const { email, password } = req.body;
      userModel.verifyCredencials(email, password);
      const user = userModel.findUserByEmail(email);

      const payload = { name: user.name, email: user.email, role: user.role };

      const token = jwt.sign(payload, secretKey, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(401).json({});
    }
  },
};

module.exports = authControler;
