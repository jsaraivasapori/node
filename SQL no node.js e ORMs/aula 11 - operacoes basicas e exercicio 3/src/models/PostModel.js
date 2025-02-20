const prisma = require("../dataBase/index.js");

class PostModel {
  static async findAll(skip, take) {
    const postsPaginated = await prisma.post.findMany({
      skip,
      take: +take,
      orderBy: { createdAt: "desc" },
      include: { tags: true },
    });
    return postsPaginated;
  }

  static async create({ userId, title, content, published, tags }) {
    console.log("userId", userId);

    const newPost = await prisma.post.create({
      data: {
        userId,
        title,
        content,
        published,
        tags: { connect: tags },
      },
    });

    return newPost;
  }

  static async findById(postId) {
    const targetPost = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: { tags: true },
    });
    if (!targetPost) throw new Error({ message: "Not found" });
    return targetPost;
  }
  static async findAllPostByUser(userId) {
    const targetPostArray = await prisma.post.findMany({
      where: {
        userId,
      },
      include: [{ User: true }, { tags: true }],
    });
    return targetPostArray;
  }

  static async update(postId, data) {
    const postToUpdate = await PostModel.findById(postId);

    data.updatedAt = new Date();
    console.log(postToUpdate);

    const updatedPost = await prisma.post.update({
      where: {
        id: postToUpdate.id,
      },
      data: {
        ...data,
        tags: {
          set: data.tags,
        },
      },
      include: { tags: true },
    });
    return updatedPost;
  }
  static async delete(postId) {
    const toDelete = await prisma.post.delete({
      where: {
        id: postId,
      },
    });
    if (!toDelete) throw Error({ message: "Not fouund" });
    return { message: "Succes" };
  }
}

module.exports = PostModel;
