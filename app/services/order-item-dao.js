const OrderItem = require("../models/order-item");

module.exports.create = async orderItem => {
  return await OrderItem.create(orderItem);
};

module.exports.createAll = async dishes => {
  return await OrderItem.insertMany(dishes);
};

module.exports.findAll = async query => {
  return OrderItem.find(query);
};

module.exports.findOne = async query => {
  return OrderItem.findOne(query);
};

module.exports.findById = async id => {
  return OrderItem.findById(id);
};

module.exports.deleteAll = async () => {
  return OrderItem.remove({});
};
