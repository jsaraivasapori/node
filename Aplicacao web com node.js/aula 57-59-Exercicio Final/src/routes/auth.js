const express = require("express");
const authController = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

authRouter.get("/api", authMiddleware.ensureAuth, (req, res) =>
    res.status(200).json({ messag: "Rota protegida " })
);

module.exports = authRouter;
