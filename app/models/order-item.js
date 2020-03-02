const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    quantity: Number,

    order: { type: Schema.Types.ObjectId, ref: 'order' },
    dishAvailability: { type: Schema.Types.ObjectId, ref: 'dish-availability' }
});

module.exports = mongoose.model('order-item', schema);
