const express = require("express");
const dashboardController = require("./controllers/dashboardController");
const authController = require("./controllers/authController");
const authMiddleware = require("./middlewears/authMiddlewar");

const router = express.Router();
router.get("/", authController.index);
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.get("/auth/logout", authMiddleware, authController.logout); // como ta protegida, so faz logout se tiver feito login
router.get("/dashboard", authMiddleware, dashboardController.dashboard);
module.exports = router;
