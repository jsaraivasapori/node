const express = require("express");
const authController = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

module.exports = authRouter;
