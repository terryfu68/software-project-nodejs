const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const {userEditValidationRules} = require('../middlewares/user.middlewares');
const {validate} = require('../middlewares/middlewares');

module.exports = (app) => {
  router.put('/:userId', userEditValidationRules(), validate, userController.edit);
  app.use('/user', router);
};
