const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

const {validate} = require('../middlewares/middlewares');
const {customerCreateValidationRules, customerLoginValidationRules} = require('../middlewares/auth.middlewares');

module.exports = (app) => {
  router.post("/signup", customerCreateValidationRules(), validate, authController.signUp);
  router.post("/login", customerLoginValidationRules(), validate, authController.login);

  app.use("/auth", router);
};
