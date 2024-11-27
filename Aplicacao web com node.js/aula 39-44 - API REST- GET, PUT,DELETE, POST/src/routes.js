const express = require("express");
const gamesController = require("./controllers/gamesController.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

router.get("/games", gamesController.index);
router.get("/games/:id", gamesController.show);
router.post("/games", gamesController.save);
router.post("/games/:id/genres", gamesController.addGenre);
router.delete("/games/:id/genres/:name", gamesController.deleteGenre);
router.put("/games/:id", gamesController.updateGame);
router.delete("/games/:id", gamesController.deleteGame);

module.exports = router;
