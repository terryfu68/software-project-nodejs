const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  postalCode: String,
  lastAccess: Date,
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
  dishes: [{ type: Schema.Types.ObjectId, ref: 'dish' }]
});

schema.virtual('fullName').get(() => `${this.firstName} ${this.lastName}`);

// Partners shouldn't be enabled by default.
schema.pre('save', function (next)  {
  if (this.role === 'Partner') this.isActive = false;
  next();
});

module.exports = mongoose.model('user', schema);
