const { Router } = require("express");
const TagController = require("../controllers/TagController.js");

const route = Router();

route.get("/tags", TagController.index);
route.get("/tags/:tagId", TagController.show);
route.post("/tags", TagController.save);
route.put("/tags/:tagId", TagController.update);
route.delete("/tags/:tagId", TagController.delete);

module.exports = route;
