const prisma = require("../dataBase/index.js");
class UserModel {
  static async findAll() {
    const query = prisma.user.findMany();
    return query;
  }

  static async create({ name, email }) {
    const newUser = prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
    return newUser;
  }

  static async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  static async update(id, params) {
    const userUpdated = prisma.user.update({
      where: {
        id: id,
      },
      data: params,
    });
    return userUpdated;
  }
  static async delete(id) {
    const userDeleted = prisma.user.delete({
      where: {
        id: id,
      },
    });
    return userDeleted;
  }
}

module.exports = UserModel;
