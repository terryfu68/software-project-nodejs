const PartnerDao = require('../services/partner-dao');

exports.createPartner = async (req, res) => {
    const {partner} = req.body;
    const newPartner = await PartnerDao.create(partner);
    res.send(newPartner);
};

exports.readPartnerByCity = async (req, res) => {
    const {city} = req.params;
    const partners = await PartnerDao.findAll({city});
    res.send(partners);
};


module.exports.listDishes = async (req, res) => {
    try {
        const partner = await PartnerDao.findById({
            _id: req.param('partnerId')
        });
        res.status(200).send(partner.dishes);
    } catch (error) {
        console.log(`Something went wrong`, error.message);
        res.status(500).send(`Something went wrong`);
    }
};

module.exports.deleteDish = async (req, res) => {
    try {
        let partner = await PartnerDao.findById({
            _id: req.param('partnerId')
        });
        partner.dishes.remove(req.param('dishId'));
        partner = await PartnerDao.updateById({_id: req.param('partnerId')},partner);
        res.status(200).send(partner);
    } catch (error) {
        console.log(`Something went wrong`, error.message);
        res.status(500).send(`Something went wrong`);
    }
};


module.exports.addDish = async (req, res) => {
    try {
        let partner = await PartnerDao.findById({
            _id: req.param('partnerId')
        });
        partner.dishes.push(req.param('dishId'));
        partner = await PartnerDao.updateById({_id: req.param('partnerId')},partner);
        res.status(200).send(partner);

    } catch (error) {
        console.log(`Something went wrong`, error.message);
        res.status(500).send(`Something went wrong`);
    }
};

