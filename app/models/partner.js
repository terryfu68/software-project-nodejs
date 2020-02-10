const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    rate: Number,
    address: String,
    city: String,
    postalCode: String,
    longitude: String,
    latitude: String,

    // Relations
    dishes: [{type: Schema.Types.ObjectId, ref: 'dish'}]
});

module.exports = mongoose.model('partner', schema);
