const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

module.exports = (app) => {
    app.get('/orders/:id', orderController.orderByCustomer);
};