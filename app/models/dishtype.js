const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    typeName: String
});

module.exports = mongoose.model('dishtype', schema);
