const { Router } = require("express");
const TagController = require("../controllers/UserController.js");

const route = Router();

route.get("/tags", TagController.index);
route.get("/tags/:id", TagController.show);
route.post("/tags", TagController.save);
route.put("/tags/:tagId", TagController.update);
route.delete("/tags/:id", TagController.delete);

module.exports = route;
