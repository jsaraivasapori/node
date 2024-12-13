const express = require("express");
const autController = require("./controllers/autController.js");
const authMiddleware = require("./middlewares/authMiddleware.js");
const router = express.Router();

router.post("/auth/register", autController.register);
router.post("/auth/login", autController.login);

router.get("/api", authMiddleware.ensureAuth, (req, res) =>
  res.status(200).json({ messag: "Rota protegida " })
);

module.exports = router;
