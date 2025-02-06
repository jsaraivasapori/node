const prisma = require("../database/PrismaClient.js");

class UserModel {
  constructor() {}

  static async findAll() {
    const query = await prisma.users.findMany();
    return query;
  }
}
module.exports = UserModel;
