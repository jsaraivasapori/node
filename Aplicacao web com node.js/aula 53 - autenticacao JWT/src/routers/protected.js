const express = require("express");
const authMiddleware = require("../middlewares/middleware");

const protectedRouter = express.Router();
protectedRouter.get("/dashboard", authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username;
    res.json({ message: `Você está na rota protegida. Bm-vindo ${username}` });
});
module.exports = protectedRouter;
