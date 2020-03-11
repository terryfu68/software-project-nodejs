const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  postalCode: String,
  lastAccess: Date,
  phoneNumber: {type: Number, required: true, unique: true},
  email: {type: String, required: true, match: [/.+\@.+\..+/, "Please fill a valid email address"], unique: true},
  password: {type: String, required: true},
  is2FA: {type: Boolean, default: false},
  isLocal: {type: Boolean, default: false},

});

schema.virtual('fullName').get(() => `${this.firstName} ${this.lastName}`);

module.exports = mongoose.model('customer', schema);

