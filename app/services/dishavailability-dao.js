const DishAvailability = require('../models/dishavailability');
const Partner = require('../models/partner');

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

const findByLocation = async (ne_lat, ne_lng, sw_lat, sw_lng) => {
    const partners = await Partner.find({
        latitude: { $gte: sw_lat, $lte: ne_lat },
        longitude: { $gte: sw_lng, $lte: ne_lng }
    }, () => { }).populate('dishes');

    return partners;
};

const getAllDishesForOrder = async () => {
    return DishAvailability.find({}).populate('dish');
};

module.exports = {
    create,
    createMany,
    findAll,
    findOne,
    findById,
    deleteAll,
    findByLocation,
    getAllDishesForOrder
};
