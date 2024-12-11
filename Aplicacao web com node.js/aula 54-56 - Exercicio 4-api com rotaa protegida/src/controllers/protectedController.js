const userModel = require("../models/usersModel.js");
const protectedController = {
  //get /dashboard/management/show
  show(req, res) {
    const user = req.authenticatedUser;
    if (user.role !== "administrator") {
      return res.status(401).json({ message: "Nivel de autorização inválido" });
    }
    try {
      const users = userModel.getAllUsers();
      return res.json({ data: users });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  // post / dashboard/management/delete/:email
  delete(req, res) {
    try {
      const { email } = req.params;
      console.log(email);

      userModel.deleteUser(email);
      return res.status(204).json(email);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  //post /dashboard/management/create
  createAdm(req, res) {
    try {
      const { name, email, password, role } = req.body;
      const newuser = {
        name: name,
        email: email,
        password: password,
        role: role,
      };
      console.log(newuser);

      userModel.createByAdm(newuser);
      return res
        .status(201)
        .json({ message: `Criado o usuário ${name} na função de ${role}` });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
module.exports = protectedController;
