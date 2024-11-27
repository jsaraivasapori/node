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
  save(req, res) {
    const { name, genres, year } = req.body;
    const newGame = gamesModel.createGame(name, genres, year);
    res.status(201);
    res.json({ message: "Dados cadastrados" });
  },
  // POST /games/:id/genres
  addGenre(req, res) {
    const { newGenre } = req.body;
    const { id } = req.params;
    const addNewGenre = gamesModel.addNewGenre(id, newGenre);
    if (!addNewGenre) {
      res.status(404);
      res.json({ message: "Game not found to insert new genre" });
    } else {
      res.json({ message: "Success to insert new genre" });
    }
  },
  //PUT /games/:id

  //DELETE /games/:id
};
