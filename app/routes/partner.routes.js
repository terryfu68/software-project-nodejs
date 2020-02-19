const express = require('express');
const router = express.Router();

const partnerController = require('../controllers/partner.controller');

module.exports = (app) => {
    router.post('/partner', partnerController.login);

    app.use('/partner', router);    

    app.route('/partner/:city').get(partnerController.readPartnerByCity);
    app.param('city', partnerController.readPartnerByCity);
    
};