const mongoose = require('mongoose');
const populate = require('./populate');

//const uri = `mongodb://${process.env.SPUSER || 'dbuser'}:${process.env.SPPASS || '!SP321'}@ds123603.mlab.com:23603/software-project`;
const uri = `mongodb://localhost/software-project`;
module.exports = (shouldPopulate) => {
    // Using promise in case that we need to load the db before the app - config, etc.
    return new Promise((resolve) => {
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        let db = mongoose.connection;

        db.on('error', () => process.exit(1));
        db.once('open', async () => {
            console.log(`Database connected`);

            // Just making sure the db is inserting properly...
            if (shouldPopulate) {
                await populate.customer();
                // await populate.dishtype();
                // await populate.dish();
                // await populate.dishavailability();
                // await populate.partner();
                // await populate.updatedish();
                // await populate.order();
                // await populate.orderItem();
                // await populate.updateOrder();
            }

            resolve();
        });
    })
};
