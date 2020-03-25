const User = require("../models/user");

module.exports.create = async user => {
  return User.create(user);
};

module.exports.updateOne = async user => {
  return User.updateOne({_id: user._id}, {$set: user});
};

module.exports.findOne = async query => {
  return User.findOne(query);
};

module.exports.findAll = async query => {
  return User.find(query);
};

module.exports.findById = async id => {
  return User.findById(id);
};

module.exports.deleteAll = async () => {
  return User.remove({});
};

module.exports.createAll = async users => {
  return User.insertMany(users);
};
