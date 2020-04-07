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


exports.orderByPartner = async (req, res) => {
    const { id } = req.params;
    const orders = await OrderDao.findByPartnerId(id);
    res.send(orders);
};

exports.changeOrderStatus = async (req, res) => {
    const id= req.params.orderId;
    const order = await OrderDao.updateById({_id: id},req.body);
    res.send(order); 
};



exports.orderHistoryByPartner = async (req, res) => {
    const { id } = req.params;
    const { status } = req.params;
    const orders = await OrderDao.findByPartnerIdAndStatus(id,status);
    res.send(orders);
};


