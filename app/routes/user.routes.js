const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const {userEditValidationRules} = require('../middlewares/user.middlewares');
const {validate} = require('../middlewares/middlewares');

module.exports = (app) => {
  router.put('/:userId', userEditValidationRules(), validate, userController.edit);
  router.delete('/:userId', userController.delete);
  router.get('/:id', userController.userProfile);
  router.get('/', userController.listAllUsers);
  router.post('/add', userController.createUser);
  app.use('/user', router);
};
