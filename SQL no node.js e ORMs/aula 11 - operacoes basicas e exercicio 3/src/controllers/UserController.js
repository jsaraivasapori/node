const UserModel = require("../models/UserModel.js");

class UserController {
  async index(req, res) {
    try {
      const users = await UserModel.findAll();

      res.status(200).json(users);
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "Erro interno" });
    }
  }

  async save(req, res) {
    try {
      const body = req.body;
      const newUserInserted = await UserModel.create(body);
      res.status(200).json(newUserInserted);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro interno" });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      console.log("id:", id);

      const target = await UserModel.findById(id);
      res.status(200).json(target);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro interno" });
    }
  }

  async update(req, res) {
    try {
      const idUser = req.params.id;
      const dataToUpdate = req.body;
      console.log("body:", dataToUpdate);

      const updatedUser = await UserModel.update(idUser, dataToUpdate);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro interno" });
    }
  }

  async delete(req, res) {
    try {
      const idUser = req.params.id;
      const deletedUser = UserModel.delete(idUser);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro interno" });
    }
  }
}

module.exports = new UserController();
