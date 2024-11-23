const express = require("express");
const postsController = require("./controllers/postController.js");
const adminController = require("./controllers/adminController.js");

const router = express.Router();
//Rotas do blogue
router.get("/", postsController.index);
router.get("/posts/:id", postsController.show);

//Rotas do admin
router.get("/admin", adminController.showAdminPage);
router.get("/admin/create", adminController.showCreatePage);
router.post("/admin/create", adminController.createPost);
router.get("/admin/edit/:id", adminController.edit);
router.post("/admin/update/:id", adminController.update);
router.post("/admin/delete/:id", adminController.delete);

module.exports = router;
