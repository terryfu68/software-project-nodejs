// Load the 'partner' Mongoose model
const Partner = require('mongoose').model('partner');

// Create a new 'createPartner' controller method
exports.createPartner = function (req, res, next) {
    // Create a new instance of the 'Partner' Mongoose model
    var partner = new Partner(req.body);
    // Use the 'Partner' instance's 'save' method to save a new partner 
    partner.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(partner);
            
        }
    });
};

exports.readPartnerByCity = function (req, res, next, city) {
    // Use the 'Partner' static 'find' method to retrieve the list of items
    Partner.find({city: city}, function (err, partners) {
        console.log('------> readPartnerByCity: '+partners)
        if (err) {
            // Call the next middleware with an error message
            console.log('some error in readPartnerByCity method')
            return next(err);
        } else {
            res.json(partners);
        }
    });
};
