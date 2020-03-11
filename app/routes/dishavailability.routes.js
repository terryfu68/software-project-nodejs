const express = require('express');
const router = express.Router();

const dishAvailabilityController = require('../controllers/dishavailability.controller');

module.exports = (app) => {
    router.get('/findByLocation', dishAvailabilityController.findByLocation);
    router.get('/', dishAvailabilityController.findAll);
    app.use('/dish-availability', router);
};
