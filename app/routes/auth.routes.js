const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

const {validate} = require('../middlewares/middlewares');
const {userCreateValidationRules, userLoginValidationRules} = require('../middlewares/auth.middlewares');

module.exports = (app) => {
  router.post("/signup", userCreateValidationRules(), validate, authController.signUp);
  router.post("/login", userLoginValidationRules(), validate, authController.login);

  app.use("/auth", router);
};
