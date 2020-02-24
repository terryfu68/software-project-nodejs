const Dishtype = require('../models/dishtype');

const create = async (dishtype) => {
    return Dishtype.create(dishtype);
};

const createAll = async (dishtypes) => {
    return Dishtype.insertMany(dishtypes);
};


const deleteAll = async () => {
    return Dishtype.remove();
};

const findOne = async (query) => {
    return Dishtype.findOne(query);
};

module.exports = {
    create,
    createAll,
    findOne,
    deleteAll

};
