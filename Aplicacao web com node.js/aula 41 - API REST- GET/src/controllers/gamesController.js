const gamesModel = require("../models/gamesModel.js");

module.exports = {
  //GET /games
  index(req, res) {
    const games = gamesModel.getAllGames();
    if (!games) {
      res.status(404);
      res.json({ message: "Empty database!" });
    } else {
      res.json(games);
    }
  },
  //GET /games/:id
  show(req, res) {
    const { id } = req.params;
    const games = gamesModel.getGameById(id);
    if (!games) {
      res.status(404);
      res.json({ message: "Game not found!" });
    }
    res.json(games);
  },
  // POST /games

  //PUT /games/:id

  //DELETE /games/:id
};
