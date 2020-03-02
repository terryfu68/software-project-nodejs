const OrderItem = require('../models/order-item');

const create = async (orderItem) => {
    return await OrderItem.create(orderItem);
};

const createAll = async (dishes) => {
    return await OrderItem.insertMany(dishes);
};

const findAll = async (query) => {
    return await OrderItem.find(query);
};

const findOne = async (query) => {
    return OrderItem.findOne(query);
};

const findById = async (id) => {
    return await OrderItem.findById(id);
};

const deleteAll = async () => {
    return await OrderItem.remove();
};

module.exports = {
    create,
    createAll,
    findAll,
    findOne,
    findById,
    deleteAll
};
