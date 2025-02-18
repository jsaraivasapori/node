const prisma = require("../dataBase/index.js");

class TagModel {
  static async findAll() {
    const tags = prisma.tag.findMany();
    return tags;
  }

  static async findById(tagId) {
    const target = await prisma.tag.findUnique({
      where: {
        id: tagId,
      },
    });
    return target;
  }

  static async create(name) {
    const newTag = await prisma.tag.create({
      data: {
        name,
        updatedAt: new Date(),
      },
    });
    return newTag;
  }

  static async update(tagId, newTagInfo) {}

  static async delete(tagId) {
    const toDelete = await TagModel.findById(tagId);
    if (!toDelete) return null;

    const deletedTag = await prisma.tag.delete({
      where: { id: tagId },
    });
    return deletedTag;
  }
}

module.exports = TagModel;
