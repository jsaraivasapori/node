const { Router } = require("express");
const SearchController = require("../controllers/SearchController.js");

const route = Router();

route.get("/search", SearchController.index);
module.exports = route;
