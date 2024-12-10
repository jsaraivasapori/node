const express = require("express");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/authController.js");
const registerMiddleware = require("../middlewares/registerMiddleware.js");

const authRouter = express.Router();
const secretKey = "eu amo gatos";

authRouter.post("/register", registerMiddleware, authController.register);

module.exports = authRouter;
