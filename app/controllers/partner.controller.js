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
