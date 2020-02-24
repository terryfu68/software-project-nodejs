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

module.exports = {
    create,
    createAll,
    findAll,
    findOne,
    findById,
    deleteAll
};
