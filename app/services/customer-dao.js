const Customer = require("../models/customer");

module.exports.create = async customer => {
  return Customer.create(customer);
};

module.exports.findAll = async query => {
  return Customer.find(query);
};

module.exports.findOne = async query => {
  return Customer.findOne(query);
};

module.exports.findById = async id => {
  return Customer.findById(id);
};

module.exports.deleteAll = async () => {
  return Customer.remove({});
};


module.exports.updateById = async (id,body) => {
  return Customer.updateOne(id,body);
};