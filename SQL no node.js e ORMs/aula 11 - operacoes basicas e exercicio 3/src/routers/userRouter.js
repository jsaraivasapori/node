const { Router } = require("express");
const UserControler = require("../controllers/UserController.js");

const router = Router();
router.get("/users", UserControler.index);
router.get("/users/:userId", UserControler.show);
router.post("/users", UserControler.save);
router.put("/users/:userId", UserControler.update);
router.delete("/users/:userId", UserControler.delete);

module.exports = router;
