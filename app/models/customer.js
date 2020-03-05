const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const schema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    postalCode: String,
    lastAccess: Date,
    phoneNumber: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        unique: true
    },
    password: {
        type: String,
    },    
    is2FA: Boolean,
    isLocal: Boolean,
    
});

schema.virtual('fullName').get(() => `${this.firstName} ${this.lastName}`);

module.exports = mongoose.model('customer', schema);

