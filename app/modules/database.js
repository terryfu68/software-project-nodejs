const mongoose = require('mongoose');

let uri = `mongodb://${process.env.SPUSER || 'dbuser'}:${process.env.SPPASS || '!SP321'}@ds123603.mlab.com:23603/software-project`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log(`Database connected`);
});
