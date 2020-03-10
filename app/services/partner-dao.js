const Partner = require("../models/partner");

module.exports.create = async partner => {
  return Partner.create(partner);
};
module.exports.findOne = async query => {
  return Partner.findOne(query);
};

module.exports.findAll = async query => {
  return Partner.find(query);
};

module.exports.findById = async id => {
  return Partner.findById(id);
};

module.exports.deleteAll = async () => {
  return Partner.remove({});
};

module.exports.createAll = async partners => {
  return Partner.insertMany(partners);
};
