const Customer = require('../models/customer');

const create = async (customer) => {
    return Customer.create(customer);
};

const findAll = async (query) => {
    return Customer.find(query);
};

const findOne = async (query) => {
    return Customer.findOne(query);
};

const findById = async (id) => {
    return Customer.findById(id);
};

module.exports = {
    create,
    findAll,
    findOne,
    findById
};
