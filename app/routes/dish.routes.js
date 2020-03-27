const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dish.controller');

module.exports = (app) => {
    router.get('/partner/:partnerId', dishController.findDishesByPartnerId);
    router.get('/', dishController.findDishes);
    router.put('/editDish/:dishId', dishController.editDish);
    router.get('/filterByDishType/:dishType', dishController.filterDishesByDishType);
    router.get('/filterByPartner/:partnerId', dishController.filterDishesByPartner);
    app.use('/dishes', router);
};
