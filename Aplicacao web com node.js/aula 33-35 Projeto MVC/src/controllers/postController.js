const postModel = require("../models/postModel.js");
const postsController = {
  //GET
  index(req, res) {
    const posts = postModel.getAllPosts();
    res.render("index", { posts });
  },
  //GET /posts/:id
};

module.exports = postsController;
