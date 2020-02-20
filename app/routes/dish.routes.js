const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dish.controller');

module.exports = (app) => {
    app.get('/dishes/:partnerId', dishController.findDishesbyPartnerId);
    app.get('/dishes', dishController.findDishes);

};