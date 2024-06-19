const express = require("express");

const loginRouter = express.Router();

loginRouter.get("/", (req, res, next) => {
  res.status(200).json({ message: "regidter" });
});

module.exports = loginRouter;
