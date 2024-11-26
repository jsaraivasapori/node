const { v4: uuidv4 } = require("uuid");
const games = [
  { id: uuidv4(), name: "Legend of Mana", genres: ["action-rpg"], year: 1999 },
  { id: uuidv4(), name: "World of Warcraft", genres: ["mmorpg"], year: 2004 },
  {
    id: uuidv4(),
    name: "Metal Gear Solid",
    genres: ["stealth", "action-adventure"],
    year: 1998,
  },
  {
    id: uuidv4(),
    name: "Sonic Adventure 2",
    genres: ["platformer"],
    year: 2001,
  },
  {
    id: uuidv4(),
    name: "Age of Empires 2",
    genres: ["real-time-strategy"],
    year: 1999,
  },
];
const gameModel = {
  getAllGames() {
    if (games.length === 0) {
      return false;
    } else {
      return games;
    }
  },
  getGameById(id) {
    const game = games.find((game) => game.id === id);

    if (!game) {
      return false;
    } else {
      return game;
    }
  },
  createGame(name, genres, year) {
    const newGame = {
      id: uuidv4(),
      name: name,
      genres: genres,
      year: year,
    };
    games.push(newGame);
  },
};

module.exports = gameModel;
