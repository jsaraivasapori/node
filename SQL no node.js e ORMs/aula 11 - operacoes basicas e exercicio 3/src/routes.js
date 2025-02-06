const { Router } = require("express");
const UserController = require("./controllers/UserControler.js");

const router = Router();

//User

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.save);
router.put("users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

module.exports = router;
