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
      res.status(200).json(postsFiltered);
    } catch (error) {
      res.status(500).json({ message: "Internal Erro" });
    }
  }
}
module.exports = new SearchController();
