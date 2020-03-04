const OrderItem = require('../models/order-item');
const create = async (orderItem) => {
    return await OrderItem.create(orderItem);
};

const createAll = async (dishes) => {
    return await OrderItem.insertMany(dishes);
};

const findAll = async (query) => {
    return OrderItem.find(query);
};

const findOne = async (query) => {
    return OrderItem.findOne(query);
};

const findById = async (id) => {
    return OrderItem.findById(id);
};

const deleteAll = async () => {
    return OrderItem.remove({});
};

module.exports = {
    create,
    createAll,
    findAll,
    findOne,
    findById,
    deleteAll
};
