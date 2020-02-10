const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    description: String,
    image: String,

    // Relations
    dishType: {type: Schema.Types.ObjectId, ref: 'dish-type'},
    partner: {type: Schema.Types.ObjectId, ref: 'partner'},
    dishAvailability: [{type: Schema.Types.ObjectId, ref: 'dish-availability'}]
});

module.exports = mongoose.model('dish', schema);
