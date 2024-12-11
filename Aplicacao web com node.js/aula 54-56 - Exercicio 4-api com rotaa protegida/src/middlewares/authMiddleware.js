const jwt = require("jsonwebtoken");
const userModel = require("../models/usersModel.js");
const secretKey = "eu amo gatos";
function authMidlleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Requer autorização" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const user = userModel.findUserByEmail(decodedToken.email);
    if (!user) {
      return res.status(401).json({ message: "Usuário Inválido" });
    }
    req.authenticatedUser = user; // criamos a chave authenticatedUser dentro do objeto req
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token Inválido" });
  }
}

module.exports = authMidlleware;
