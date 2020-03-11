const DishAvailabilityDao = require('../services/dishavailability-dao');

exports.findByLocation = async (req, res) => {
    try {
        const {ne_lat, ne_lng, sw_lat, sw_lng} = req.query;
        const dishes = await DishAvailabilityDao.findByLocation(
            ne_lat,
            ne_lng,
            sw_lat,
            sw_lng
        );
        res.send(dishes);
    } catch (error) {
        console.log(`Something went wrong`, e.message);
        res.status(500).send(`Something went wrong`);
    }
};

exports.findAll = async (req, res) => {
    try {
        const dishes = await DishAvailabilityDao.findAll();
        res.send(dishes);
    } catch (error) {
        console.log(`Something went wrong`, e.message);
        res.status(500).send(`Something went wrong`);
    }
}