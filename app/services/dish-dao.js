const Dish = require("../models/dish");

module.exports.create = async dish => {
  return Dish.create(dish);
};

module.exports.createMany = async dishes => {
  return Dish.insertMany(dishes);
};

module.exports.findAll = async query => {
  return Dish.find(query);
};

module.exports.findOne = async query => {
  return Dish.findOne(query);
};

module.exports.findById = async id => {
  return Dish.findById(id);
};

module.exports.deleteAll = async () => {
  return Dish.remove({});
};

module.exports.updateOne = async (query, dish) => {
  return Dish.findOneAndUpdate(query, dish);
};

module.exports.updateById = async (id,body) => {
  return Dish.updateOne(id,body);
};
