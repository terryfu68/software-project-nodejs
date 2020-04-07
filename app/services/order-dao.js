const Order = require("../models/order");
const OrderItemDao = require("../services/order-item-dao");

module.exports.create = async order => {
  let orderItems = [...order.items];
  order.items = [];

  let newOrder = await Order.create(order);

  for (let i = 0; i < orderItems.length; i++) {
    const orderItem = await OrderItemDao.create(orderItems[i]);

    await Order.findByIdAndUpdate(
      newOrder._id,
      { $push: { items: orderItem._id } },
      { new: true, useFindAndModify: false }
    );
  }

  return newOrder;
};

module.exports.createAll = async dishes => {
  return Order.insertMany(dishes);
};

module.exports.findAll = async query => {
  return Order.find(query);
};

module.exports.findOne = async query => {
  return Order.findOne(query);
};

module.exports.findById = async id => {
  return Order.findById(id)
    .populate("partner")
    .populate("customer")
    .populate({
      path: "items",
      model: "order-item",
      populate: { path: "dishAvailability", populate: { path: "dish" } }
    });
};

module.exports.deleteAll = async () => {
  return Order.remove({});
};

module.exports.findByCustomerId = async customerId => {
  return Order.find({ customer: customerId })
    .populate("partner")
    .populate("customer")
    .populate({
      path: "items",
      model: "order-item",
      populate: { path: "dishAvailability" }
    });
};

module.exports.updateOne = async (query, order) => {
  return Order.findOneAndUpdate(query, order);
};


module.exports.findByPartnerId = async partnerId => {
  return Order.find({ partner: partnerId })
};

module.exports.updateById = async (id,body) => {
  return Order.updateOne(id,body);
};



module.exports.findByPartnerIdAndStatus = async (id,status)  => {
  return Order.find({ partner: id, status:status })
};

