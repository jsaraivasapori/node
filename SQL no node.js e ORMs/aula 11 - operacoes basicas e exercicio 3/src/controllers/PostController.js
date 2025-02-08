const PostModel = require("../models/PostModel.js");

class PostController {
  async index(req, res) {
    try {
      const posts = await PostModel.findAll();
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal erro" });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const postFound = await PostModel.findById(id);

      res.status(200).json(postFound);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal erro" });
    }
  }
  async list(req, res) {
    try {
      const { userId } = req.params;
      const postByUser = await PostModel.findAllPostByUser(userId);
      res.status(200).json(postByUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal erro" });
    }
  }
  async save(req, res) {
    try {
      const data = req.body;
      console.log(data);

      const newPost = await PostModel.create(data);
      res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal erro" });
    }
  }

  async update(req, res) {
    try {
      const { postId } = req.params;
      console.log(postId);

      const dataToUpdate = req.body;

      const updatedPost = await PostModel.update(postId, dataToUpdate);
      res.status(200).json(updatedPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Erro" });
    }
  }
  async delete(req, res) {
    try {
      const { postId } = req.params;
      const postDeleted = await PostModel.delete(postId);
      res.status(200).json(postDeleted);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Erro" });
    }
  }
}

module.exports = new PostController();
