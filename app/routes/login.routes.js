const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

module.exports = (app) => {
    router.post('/', loginController.login);

    app.use('/login', router);
};

