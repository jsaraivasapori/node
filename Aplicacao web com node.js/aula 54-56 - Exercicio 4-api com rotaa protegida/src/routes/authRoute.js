const express = require("express");
const authController = require("../controllers/authController.js");
const registerMiddleware = require("../middlewares/registerMiddleware.js");

const authRouter = express.Router();

authRouter.post("/register", registerMiddleware, authController.register);
authRouter.post("/login", authController.login);

module.exports = authRouter;
