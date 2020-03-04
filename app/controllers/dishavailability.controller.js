const DishAvailabilityDao = require('../services/dishavailability-dao');

exports.findDishAvailabilityByLocation = async (req, res) => {
    const dishes = await DishAvailabilityDao.findByLocation(
        req.body.data.ne_lat,
        req.body.data.ne_lng,
        req.body.data.sw_lat,
        req.body.data.sw_lng
    );
    res.send(dishes);
};

exports.getAll = async (req, res) => {
    const dishes = await DishAvailabilityDao.getAllDishesForOrder();
    res.send(dishes);
}