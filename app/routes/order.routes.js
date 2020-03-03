const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

module.exports = (app) => {
    router.get('/customer/:customerId', orderController.orderByCustomer);
    app.use('/orders', router);
};
