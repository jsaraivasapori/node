const UserModel = require("../models/UserModel.js");
class UserController {
  constructor() {}

  //GET  /api/users
  async index(req, res) {
    const result = await UserModel.findAll();
    res.json(result);
  }

  //GET /api/users/:id
  async show(req, res) {}

  //POST /api/users
  async save(req, res) {}

  //PUT /api/users/:id
  async update(req, res) {}

  //DELETE /api/users/:id

  async delete(req, res) {}
}

module.exports = new UserController();
