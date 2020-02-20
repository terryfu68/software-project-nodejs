const DishDao = require('../services/dish-dao');
exports.findDishesbyPartnerId = async(req, res) => {
      
      const dishes = await DishDao.findAll({'partner':req.params.partnerId});
      if(dishes.length===0) res.status(404).send('No dishes for the given partnerId');
      res.send(dishes);
   
     
};


exports.findDishes = async (req, res) => {
    
    const dishes = await DishDao.findAll({});
    if(!dishes) res.status(404).send('No any dishes');
    res.send(dishes);
   
};