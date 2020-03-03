const OrderDao = require('../services/order-dao');

exports.orderByCustomer = async (req, res) => {
    const {customerId} = req.params;
    const orders = await OrderDao.findByCustomerId(customerId);
    res.send(orders);
};
