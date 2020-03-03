const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dish.controller');

module.exports = (app) => {
    router.get('/partner/:partnerId', dishController.findDishesByPartnerId);
    router.get('/', dishController.findDishes);
    app.use('/dishes', router);
};
