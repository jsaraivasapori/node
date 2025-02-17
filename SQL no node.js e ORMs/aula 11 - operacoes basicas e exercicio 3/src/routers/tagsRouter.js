const { Router } = require("express");
const TagController = require("../controllers/UserController.js");

const route = Router();

route.get("/tags", TagController.index);
route.get("/tags/:id", TagController.show);
router.post("/tags", TagController.save);
router.put("/tags/:tagId", TagController.update);
router.delete("/tags/:id", TagController.delete);

module.exports = route;
