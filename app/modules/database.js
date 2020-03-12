const mongoose = require("mongoose");
const populate = require("./populate");
const config = require("../../config/config");

module.exports = shouldPopulate => {
    // Using promise in case that we need to load the db before the app - config, etc.
    return new Promise((resolve, reject) => {
        try {
            mongoose.connect(config.dbUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            let db = mongoose.connection;
            console.log("Connecting on the uri: " + config.dbUri);

            db.on("error", () => process.exit(1));
            db.once("open", async () => {
                console.log(`Database connected`);

                // Just making sure the db is inserting properly...
                if (shouldPopulate) {
                    await populate.clean();
                    await populate.customer();
                    await populate.partner();
                    await populate.dishType();
                    await populate.dish();
                    await populate.dishAvailability();
                    await populate.updateDishes();
                }

                resolve();
            });
        } catch (error) {
            reject(error); // This isn't being catch yet.
            console.log(`Database failed at some point.`, e.message);
        }
    });
};
