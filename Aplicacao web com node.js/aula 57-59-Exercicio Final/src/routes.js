const express = require("express");
const autController = require("./controllers/autController.js");
const router = express.Router();

router.post("/auth/register", autController.register);

module.exports = router;
