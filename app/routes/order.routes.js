const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

module.exports = (app) => {
    // router.get('/customer/:customerId', orderController.orderByCustomer);
    router.get('/orders/:id', orderController.orderByCustomer);
    router.get('/orderDetails/:id', orderController.orderById);
    router.post('/createOrder', orderController.createOrder);
    app.use(router);
};
