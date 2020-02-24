const Partner = require('../models/partner');

const create = async (partner) => {
    return Partner.create(partner);
};

const findAll = async (query) => {
    return Partner.find(query);
};

const findOne = async (query) => {
    return Partner.findOne(query);
};

const findById = async (id) => {
    return Partner.findById(id);
};

const findOne = async (query) => {
    return Partner.findOne(query);
};


const deleteAll = async () => {
    return Partner.remove();
};

const createAll = async (partners) => {
    return Partner.insertMany(partners);
};

module.exports = {
    create,
    findAll,
    findById,
    findOne,
    deleteAll,
    createAll,
};
