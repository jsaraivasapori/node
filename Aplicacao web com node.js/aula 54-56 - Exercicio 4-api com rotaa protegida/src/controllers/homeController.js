const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/usersModel.js");

const secretKey = "eu amo gatos";

const homeController = {
  message(req, res) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader) {
      return res.status(200).json({ message: "Bem vindo (a), vizitante" });
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, secretKey);
    return res
      .status(200)
      .json({ message: `Bem-vindo (a) ${decodedToken.name}` });
  },
};

module.exports = homeController;
