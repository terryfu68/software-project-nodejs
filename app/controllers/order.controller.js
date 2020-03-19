const OrderDao = require('../services/order-dao');

exports.orderByCustomer = async (req, res) => {
    const { id } = req.params;
    const orders = await OrderDao.findByCustomerId(id);
    res.send(orders);
};

exports.createOrder = async (req, res) => {
    const order = await OrderDao.create(req.body);

    res.send(order._id);
}

exports.orderById = async (req, res) => {
    const { id } = req.params;
    const order = await OrderDao.findById(id);

    res.send(order);
}
