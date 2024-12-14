const express = require("express");
const booksController = require("../controllers/booksController.js");
const booksModel = require("../models/booksModel.js");
const loansController = require("../controllers/loansController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const apiRouter = express.Router();

apiRouter.get("/books", booksController.index);
apiRouter.get("/books/:id", booksController.show);

apiRouter.post("/books", booksController.save);
apiRouter.put("/books/:id", booksController.update);
apiRouter.delete("/books/:id", booksController.delete);

apiRouter.get("/loans", loansController.index);
apiRouter.get("/loans/:id", loansController.show);
apiRouter.post("/loans", authMiddleware.ensureAuth, loansController.save);
apiRouter.post("/loans/:id/return", loansController.return);

module.exports = apiRouter;
