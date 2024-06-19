const express = require("express");

const regisRouter = express.Router();

regisRouter.post(
  "/register",
  registerValidator,
  authController.authUserRegister
);

module.exports = regisRouter;