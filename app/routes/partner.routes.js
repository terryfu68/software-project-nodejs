const express = require('express');
const router = express.Router();

const partnerController = require('../controllers/partner.controller');

module.exports = (app) => {
    router.get('/city/:city', partnerController.readPartnerByCity);
    router.put("/listDishes/:partnerId", partnerController.listDishes);
    router.put("/addDish/:partnerId/:dishId", partnerController.addDish);
    router.put("/deleteDish/:partnerId/:dishId", partnerController.deleteDish);
    app.use('/partner', router);
};
