const { Router } = require("express");
const productsController = require("./controllers/productsController.js");
const ClientController = require("./controllers/ClientsController.js");
const router = Router();

//Rotas de produtos
router.get("/products", productsController.index);
router.get("/products/:id", productsController.show);
router.post("/products", productsController.save);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

//Rotas de clientes
router.get("/clients", ClientController.index);
router.get("/clients/:id", ClientController.show);
router.post("/clients", ClientController.save);
router.put("/clients/:id", ClientController.update);
router.delete("/clients/:id", ClientController.delete);

module.exports = router;
