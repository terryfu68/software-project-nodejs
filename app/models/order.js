const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderStatus = ['Pending', 'Completed', 'Canceled'];

const schema = new Schema({
    status: Number,
    orderedAt: { type: Date, default: Date.now() },

    // Relations
    items: [{ type: Schema.Types.ObjectId, ref: 'order-item' }],
    customer: { type: Schema.Types.ObjectId, ref: 'customer' },
    partner: { type: Schema.Types.ObjectId, ref: 'partner' }
});

schema.virtual('orderStatus').get(() => orderStatus[this.status]);

module.exports = mongoose.model('order', schema);
