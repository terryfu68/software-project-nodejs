const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    lastAccess: Date
});

module.exports = mongoose.model('custom-user', schema);
