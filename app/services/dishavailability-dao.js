const DishAvailability = require('../models/dishavailability');

const create = async (dishavailability) => {
    return DishAvailability.create(dishavailability);
};

const createAll = async (dishavailabilities) => {
    return DishAvailability.insertMany(dishavailabilities);
};

const findAll = async (query) => {
    return DishAvailability.find(query);
};

const findOne = async (query) => {
    return DishAvailability.findOne(query);
};

const findById = async (id) => {
    return DishAvailability.findById(id);
};

const deleteAll = async () => {
    return DishAvailability.remove();
};

const findByLocation = async (lon, lat, lon1, lat1) => {
    // return DishAvailability.find({ longitude: lon, latitude: })
    // return DishAvailability.find().$where('this.dish.partner.longitude < ' + )
}

module.exports = {
    create,
    createAll,
    findAll,
    findOne,
    findById,
    deleteAll
};
