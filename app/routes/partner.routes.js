const express = require('express');
const router = express.Router();

const partnerController = require('../controllers/partner.controller');

module.exports = (app) => {
    router.get('/city/:city', partnerController.readPartnerByCity);
    app.use('/partner', router);
};
