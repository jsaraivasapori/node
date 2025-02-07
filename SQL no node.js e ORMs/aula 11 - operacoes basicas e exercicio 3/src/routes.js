const { Router } = require("express");
const UserControler = require("./controllers/UserController.js");

const router = Router();

router.get("/users", UserControler.index);
router.get("/users/:id", UserControler.show);
router.post("/users", UserControler.save);
router.put("/users/:id", UserControler.update);
router.delete("/users/:id", UserControler.delete);

module.exports = router;
