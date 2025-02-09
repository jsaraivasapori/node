const prisma = require("../dataBase/index.js");

class SearchModel {
  filter = {};

  static async search(title, authorId, published, startDate, endDate) {
    makeFilter(title, authorId, published, startDate, endDate);
    const posts = await prisma.post.findMany({
      where: filter,
      // Opcionalmente, também podemos ordenar os posts por uma coluna, como a data de criação
      orderBy: { createdAt: "desc" },
    });
    return posts;
  }

  async makeFilter() {
    if (title) {
      filter.title = {
        contains: title,
        // Opcionalmente, também podemos buscar sem diferenciar maiúsculas e minúsculas
        mode: "insensitive",
      };
    }

    if (authorId) {
      filter.authorId = authorId; //meu id e uuid n e inteiro e sim string
    }

    if (published) {
      filter.published = published === "true";
    }

    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) {
        filter.createdAt.gte = new Date(startDate); // gte = maior ou igual a
      }
      if (endDate) {
        filter.createdAt.lte = new Date(endDate); //  lte = menor ou igual  a
      }
    }

    console.log("Filtro:", filter);
  }
}

module.exports = SearchModel;
