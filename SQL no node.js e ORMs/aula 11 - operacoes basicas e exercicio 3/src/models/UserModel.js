const prisma = require("../dataBase/index.js");
class UserModel {
  static async findAll() {
    const query = prisma.user.findMany();
    return query;
  }

  static async create({ name, email }) {
    const newUser = await prisma.user.create({
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

  static async update(userId, data) {
    const userUpdated = prisma.user.update({
      where: {
        userId,
      },
      data,
    });
    return userUpdated;
  }
  static async delete(userId) {
    const userDeleted = prisma.user.delete({
      where: {
        userId,
      },
    });
    return userDeleted;
  }
}

module.exports = UserModel;
