let posts = [
  {
    id: "1",
    title: "Primeira publicação do João",
    content: "Estou estudando Node.js e Express. Agora estou aprendendo MVC",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Segunda publicação",
    content: "Lorem ipsum....",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

//Post{id,titulo, conteudo, criatedAt, updatedAt}
const postModel = {
  getAllPosts() {
    return posts;
  },
  getPostById(id) {
    return posts.find((post) => post.id === id);
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
    posts.push(post);
  },

  updatePost(id, updatedPost) {
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() };
  },
  deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
  },
};
module.exports = postModel;
