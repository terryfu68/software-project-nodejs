const Dish = require('../models/dish');

const create = async (dish) => {
    return Dish.create(dish);
};

const createMany = async (dishes) => {
    return Dish.insertMany(dishes);
};

const findAll = async (query) => {
    return Dish.find(query);
};

const findOne = async (query) => {
    return Dish.findOne(query);
};

const findById = async (id) => {
    return Dish.findById(id);
};

const deleteAll = async () => {
    return Dish.remove({});
};


const updateOne = async (query, dish) => {
    return Dish.findOneAndUpdate(query, dish);
};


module.exports = {
    create,
    createMany,
    findAll,
    findOne,
    findById,
    deleteAll,
    updateOne,
};
