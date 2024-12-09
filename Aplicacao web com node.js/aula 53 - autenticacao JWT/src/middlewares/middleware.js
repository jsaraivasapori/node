const jwt = require("jsonwebtoken");
const users = require("../models/users");
const secretKey = "palavra-chave-secreta";
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const payload = { message: "autorization rerquired" };
    if (!authHeader) {
        return res.status(401).json(payload);
    }
    const token = authHeader.split(" ")[1]; // divido no espaço e pulo a primiera parte pego so o token e deixo a palavra bearer
    try {
        const decodedToken = jwt.verify(token, secretKey);
        const user = users.find(
            (user) => user.username === decodedToken.username
        );
        if (!user) {
            return res.status(401).json({ message: "Invalid user" });
        }
        req.authenticatedUser = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
    console.log(token);
    next();
};

module.exports = authMiddleware;
