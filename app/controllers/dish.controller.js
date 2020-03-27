const DishDao = require('../services/dish-dao');
const DishTypeDao = require('../services/dishtype-dao');


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


exports.editDish = async (req, res) => {
    const id= req.params.dishId;
    const dish = await DishDao.updateById({_id: id},req.body);
    res.send(dish); 
};

exports.filterDishesByDishType = async (req, res) => {
    const typeName= req.params.dishType;
    const dishType = await DishTypeDao.findOne({typeName: typeName});
    const dishes = await DishDao.findAll({dishType: dishType.id});
    res.send(dishes); 
};


exports.filterDishesByPartner = async (req, res) => {
    const partnerId= req.params.partnerId;
    const dishes = await DishDao.findAll({partner: partnerId});
    res.send(dishes); 
};


