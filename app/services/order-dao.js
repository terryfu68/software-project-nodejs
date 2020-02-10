const Order = require('../models/partner');

const create = async (order) => {
    return Order.create(order);
};

const findAll = async (query) => {
    return Order.find(query);
};

const findById = async (id) => {
    return Order.findById(id);
};

module.exports = {
    create,
    findAll,
    findById
};
