const express = require("express");
const authMidlleware = require("../middlewares/authMiddleware.js");
const protectedController = require("../controllers/protectedController.js");

const protectedRouter = express.Router();

protectedRouter.get(
  "/dashboard/management/show",
  authMidlleware,
  protectedController.show
);
protectedRouter.delete(
  "/dashboard/management/delete/:email",
  authMidlleware,
  protectedController.delete
);
protectedRouter.post(
  "/dashboard/management/create",
  authMidlleware,
  protectedController.createAdm
);
module.exports = protectedRouter;
