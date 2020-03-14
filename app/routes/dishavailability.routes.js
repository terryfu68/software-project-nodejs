const express = require('express');
const router = express.Router();

const dishAvailabilityController = require('../controllers/dishavailability.controller');

module.exports = (app) => {
    router.post('/findDishes', dishAvailabilityController.findDishAvailabilityByLocation);
    router.get('/dish-availability', dishAvailabilityController.getAll);
    app.use(router);
};
