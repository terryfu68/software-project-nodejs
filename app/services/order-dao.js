const Order = require('../models/order');
const OrderItemDao = require('../services/order-item-dao');

const create = async (order) => {
    let orderItems = [...order.items];
    order.items = [];

    let newOrder = await Order.create(order);

    for (let i = 0; i < orderItems.length; i++) {
        const orderItem = await OrderItemDao.create(orderItems[i]);

        await Order.findByIdAndUpdate(
            newOrder._id,
            { $push: { items: orderItem._id } },
            { new: true, useFindAndModify: false });
    }

    return newOrder;
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
    return Order.findById(id)
        .populate('partner')
        .populate('customer')
        .populate({ path: 'items', model: 'order-item', populate: { path: 'dishAvailability', populate: { path: 'dish' } } });
};

const deleteAll = async () => {
    return Order.remove({});
};

const findByCustomerId = async (customerId) => {
    return Order.find({ customer: customerId })
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
