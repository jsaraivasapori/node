const { json } = require("express");
const playlistModel = require("../models/playlistModel.js");

module.exports = {
  //GET /playlists
  index(req, res) {
    try {
      const playlist = playlistModel.getAllPlaylists();
      res.status(200).json(playlist);
    } catch (error) {
      res.status(500).json({ message: ` ${error}` });
    }
  },
  //GET /playlists/:playlistId
  show(req, res) {
    try {
      const { playlistId } = req.params;
      target = playlistModel.getPlaylistById(playlistId);
      res.status(200).json(target);
    } catch (error) {
      res.status(500).json({ message: `${error}` });
    }
  },
  // POST /playlists
  save(req, res) {
    try {
      const data = req.body;
      console.log(data);

      const newPlaylist = playlistModel.createPlaylist(data);
      res.status(201).json(newPlaylist);
    } catch (error) {
      res.status(500).json({ message: `${error}` });
    }
  },
  update(req, res) {
    try {
      const { playlistId } = req.params;
      const updateData = req.body;
      const updatedData = playlistModel.updatePlaylist(playlistId, updateData);
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ message: `${error}` });
    }
  },
  //DELETE /playlist/:playlistId
  delete(req, res) {
    try {
      const { playlistId } = req.params;
      playlistModel.deletePlaylist(playlistId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: `${error}` });
    }
  },
  //POST /playlist/:playlistId/addMusic
  addMusica(req, res) {
    try {
      const { playlistId } = req.params;
      const data = req.body;
      const novaMusica = playlistModel.addMusic(playlistId, data);
      res.status(201).json(novaMusica);
    } catch (error) {
      res.status(500).json({ message: `${error}` });
    }
  },
  //DELETE /playlists/:playlistId/:musicId/delete
  deleteMusica(req, res) {
    try {
      const { playlistId, musicId } = req.params;
      playlistModel.deleteMusic(playlistId, musicId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: `${error}` });
    }
  },
};
