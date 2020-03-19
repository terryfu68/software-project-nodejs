const DishAvailability = require("../models/dishavailability");
const Partner = require("../models/partner");

module.exports.create = async dishAvailability => {
  return DishAvailability.create(dishAvailability);
};

module.exports.createMany = async dishAvailabilities => {
  return DishAvailability.insertMany(dishAvailabilities);
};

module.exports.findAll = async query => {
  return DishAvailability.find(query).populate("dish");
};

module.exports.findOne = async query => {
  return DishAvailability.findOne(query);
};

module.exports.findById = async id => {
  return DishAvailability.findById(id);
};

module.exports.deleteAll = async () => {
  return DishAvailability.remove({});
};

module.exports.findByLocation = async ({ ne_lat, ne_lng, sw_lat, sw_lng }) => {
  const partners = await Partner.find({
    latitude: { $gte: sw_lat, $lte: ne_lat },
    longitude: { $gte: sw_lng, $lte: ne_lng },
  }).populate({
    path: "dishes",
    model: "dish",
    populate: { path: "dishAvailability" }
  });;

  return partners;
};
