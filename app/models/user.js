const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const schema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  postalCode: String,
  lastAccess: {type: Date, default: Date.now()},
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  is2FA: {
    type: Boolean,
    default: false
  },
  isLocal: {
    type: Boolean,
    default: false
  },

  role: {type: String, enum: ['Customer', 'Partner'], required: true},
  isActive: {type: Boolean, default: true},

  // Partner fields
  companyName: String,
  longitude: Number,
  latitude: Number,
  dishes: [{type: Schema.Types.ObjectId, ref: 'dish'}]
});

schema.virtual('fullName').get(() => `${this.firstName} ${this.lastName}`);

// Hashing the password this is the document creation
schema.pre('save', function (next) {
  // Internal field used by mongoose - it won't be saved to the model
  if (this.isNew) this.password = bcrypt.hashSync(this.password, 10);
  next();
});

// Partners shouldn't be enabled by default.
schema.pre('save', function (next) {
  if (this.role === 'Partner') this.isActive = false;
  next();
});

module.exports = mongoose.model('user', schema);
