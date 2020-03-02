const OrderDao = require('../services/order-dao');

exports.orderByCustomer = async (req, res) => {
    const orders = await OrderDao.findByCustomerId(req.params.id);

    res.send(orders);
}