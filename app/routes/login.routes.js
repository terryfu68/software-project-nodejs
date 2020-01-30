const loginController = require('../controllers/login.controller');

module.exports = (app) => {	
	app.post('/', loginController.login);
};

