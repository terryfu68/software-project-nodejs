const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    startDate: Date,
    endDate: Date,
    originalPrice: Number,
    discountPrice: Number,
    quantity: Number,
    quantityTotal: Number,

    // Relations
    dish: {type: Schema.Types.ObjectId, ref: 'dish'}
});

module.exports = mongoose.model('dish-availability', schema);
