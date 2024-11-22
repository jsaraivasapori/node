let posts = [];

//Post{id,titulo, conteudo, criatedAt, updatedAt}
const postModel = {
  getAllPosts() {
    return post;
  },
  getPostById(id) {
    return post.find((post) => post.id === id);
  },
  criatePost(title, content) {
    const post = {
      id: Date.now.toString(),
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return post;
  },
  savePost(post) {
    posts.unshift(post);
  },

  updatePost(id, updatedPost) {
    oldPost = this.getPostById(id);
    updatedPost = {
      id: oldPost.id,
      title: updatedPost.title,
      content: updatedPost.content,
      createdAt: oldPost.createdAt,
      updatedPost: new Date(),
    };
  },
  deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
  },
};
module.exports = postModel;
