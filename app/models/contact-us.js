const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('contact-us', schema);
