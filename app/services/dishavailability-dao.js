const DishAvailability = require('../models/dishavailability');

const create = async (dishAvailability) => {
    return DishAvailability.create(dishAvailability);
};


const createMany = async (dishAvailabilities) => {
    return DishAvailability.insertMany(dishAvailabilities);
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
    return DishAvailability.remove({});
};

const findByLocation = async ({lon, lat, lon1, lat1}) => {
    // TODO: sort out this - not sure why was pushed commented.
    // return DishAvailability.find({ longitude: lon, latitude: })
    // return DishAvailability.find().$where('this.dish.partner.longitude < ' + )
};

module.exports = {
    create,
    createMany,
    findAll,
    findOne,
    findById,
    deleteAll
};
