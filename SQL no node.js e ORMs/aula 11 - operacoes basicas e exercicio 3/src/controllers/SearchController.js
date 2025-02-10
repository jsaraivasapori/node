const SearchModel = require("../models/SearchModel.js");

class SearchController {
  async index(req, res) {
    try {
      const { title, authorId, published, startDate, endDate } = req.query;

      const postsFiltered = await SearchModel.search(
        title,
        authorId,
        published,
        startDate,
        endDate
      );

      postsFiltered.length > 0
        ? res.status(200).json(postsFiltered)
        : res.status(400).json({ message: "Não encontrado" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = new SearchController();
