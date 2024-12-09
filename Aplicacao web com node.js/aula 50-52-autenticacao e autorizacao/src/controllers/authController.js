const users = require("../models/users.js");

module.exports = {
  //GET  /
  index(req, res) {
    res.render("index");
  },
  //POST /auth/register
  register(req, res) {
    const { username, password } = req.body;
    const userAlreadyExists = users.find((user) => users.username === username);
    if (userAlreadyExists) {
      return res.status(400).redirect("/");
    }
    const newUser = { username, password, role: "standart" };
    users.push(newUser);
    // ao registrar ja faco login
    req.session.authenticated = true;
    req.session.currentUser = newUser;
    res.redirect("/dashboard");
    console.log(users);
  },
  //POST  /auth/login
  login(req, res) {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);
    console.log(user);

    if (!user) {
      return res.redirect("/");
    }
    if (password !== user.password) {
      return res.redirect("/");
    }
    // o objeto de session eu consigo criar qualquer coisa dentro dele inclusive novos pares chave-valor para salvar em memoria no server
    req.session.authenticated = true;
    req.session.currentUser = user;
    res.redirect("/dashboard");
    console.log("deu certo");
  },
  //GET /auth/logout
  logout(req, res) {
    req.session.destroy(); // mata a sessao especifica. ja sabe qual e a sessao automaticamente
    res.redirect("/");
  },
};
