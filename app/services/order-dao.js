const Order = require('../models/order');

const create = async (order) => {
    return Order.create(order);
};

const createAll = async (dishes) => {
    return Order.insertMany(dishes);
};

const findAll = async (query) => {
    return Order.find(query);
};

const findOne = async (query) => {
    return Order.findOne(query);
};

const findById = async (id) => {
    return Order.findById(id);
};

const deleteAll = async () => {
    return Order.remove();
};

const findByCustomerId = async id => {
    return await Order.find({ 'customer': id })
        .populate('partner')
        .populate('customer')
        .populate({ path: 'items', model: 'order-item', populate: { path: 'dishAvailability' } });
};

const updateOne = async (query, order) => {
    return Order.findOneAndUpdate(query, order);
};

module.exports = {
    create,
    createAll,
    findAll,
    findOne,
    findById,
    deleteAll,
    findByCustomerId,
    updateOne
};
