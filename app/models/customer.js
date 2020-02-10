const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    postalCode: String,
    lastAccess: Date,
    is2FA: Boolean,
    isLocal: Boolean
});

schema.virtual('fullName').get(() => `${this.firstName} ${this.lastName}`);

module.exports = mongoose.model('customer', schema);
