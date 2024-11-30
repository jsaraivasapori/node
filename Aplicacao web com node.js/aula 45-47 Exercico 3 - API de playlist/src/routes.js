const express = require("express");
const playlistController = require("./controllers/playlistController.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/playlists");
});
router.get("/playlists", playlistController.index);
router.get("/playlists/:playlistId", playlistController.show);
router.post("/playlists", playlistController.save);
router.put("/playlists/:playlistId", playlistController.update);
router.delete("/playlists/:playlistId", playlistController.delete);
router.post("/playlists/:playlistId/addMusic", playlistController.addMusica);
router.delete(
  "/playlists/:playlistId/:musicId/delete",
  playlistController.deleteMusica
);
module.exports = router;
