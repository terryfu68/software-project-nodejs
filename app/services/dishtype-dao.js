const DishType = require('../models/dishtype');

const create = async (dishTypes) => {
    return DishType.create(dishTypes);
};

const createMany = async (dishTypes) => {
    return DishType.insertMany(dishTypes);
};

const deleteAll = async () => {
    return DishType.remove({});
};

const findOne = async (query) => {
    return DishType.findOne(query);
};

module.exports = {
    create,
    createMany,
    findOne,
    deleteAll,
};
