const Partner = require('../models/partner');

const create = async (partner) => {
    return Partner.create(partner);
};

const findAll = async (query) => {
    return Partner.find(query);
};

const findById = async (id) => {
    return Partner.findById(id);
};

module.exports = {
    create,
    findAll,
    findById
};
