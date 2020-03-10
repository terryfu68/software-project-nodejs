const DishType = require("../models/dishtype");

module.exports.create = async dishTypes => {
  return DishType.create(dishTypes);
};

module.exports.createMany = async dishTypes => {
  return DishType.insertMany(dishTypes);
};

module.exports.deleteAll = async () => {
  return DishType.remove({});
};

module.exports.findOne = async query => {
  return DishType.findOne(query);
};
