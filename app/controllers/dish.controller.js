const DishDao = require('../services/dish-dao');

exports.findDishesByPartnerId = async (req, res) => {
    const {partnerId} = req.params;
    const dishes = await DishDao.findAll({partner: partnerId});
    res.send(dishes);
};

exports.findDishes = async (req, res) => {
    const {query} = req.query;
    const dishes = await DishDao.findAll(query);
    res.send(dishes);

};
