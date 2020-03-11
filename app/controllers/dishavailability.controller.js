const DishAvailabilityDao = require('../services/dishavailability-dao');

exports.findByLocation = async (req, res) => {
    try {
        const query = req.query;
        const dishes = await DishAvailabilityDao.findByLocation(query);
        res.send(dishes);
    } catch (error) {
        console.log(`Something went wrong`, error.message);
        res.status(500).send(`Something went wrong`);
    }
};

exports.findAll = async (req, res) => {
    try {
        const dishes = await DishAvailabilityDao.findAll();
        res.send(dishes);
    } catch (error) {
        console.log(`Something went wrong`, error.message);
        res.status(500).send(`Something went wrong`);
    }
}
