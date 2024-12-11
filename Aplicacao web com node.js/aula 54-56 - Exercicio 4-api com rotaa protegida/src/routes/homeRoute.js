const express = require("express");
const homeController = require("../controllers/homeController.js");

const homeRoute = express.Router();
homeRoute.get("/home", homeController.message);

module.exports = homeRoute;
