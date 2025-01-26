const { Router } = require("express");
const productsController = require("./controllers/productsController");
const router = Router();

router.get("/products", productsController.index);
router.get("/products/:id", productsController.show);
router.post("/products", productsController.save);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

module.exports = router;
