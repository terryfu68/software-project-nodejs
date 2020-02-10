// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initialize database
let shouldPopulate = true;
require('./app/modules/database')(shouldPopulate);

// Load the 'express' module
const express = require('./config/express');

// Create a new Express application instance
const app = express.configureExpress();

// Use the Express application instance to listen to the ENV || '3000' port
app.listen(process.env.PORT || 3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
