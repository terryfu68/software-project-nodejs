const CustomerDao = require('../services/customer-dao');

const customer = async () => {
    let eduardo = await CustomerDao.findOne({'username': 'eduardoewgo'});

    if (!eduardo) return CustomerDao.create({
        username: 'eduardoewgo',
        firstName: 'Eduardo',
        lastName: 'Wickert',
        address: '25 Montgomery',
        city: 'Toronto',
        postalCode: 'M4R0A1',
        lastAccess: Date.now(),
        is2FA: false,
        isLocal: false
    });
};

module.exports = {
    customer
};


const PartnerDao = require('../services/partner-dao');

const partner = async () => {

    let partnerTmp1 = await PartnerDao.findOne({'name': 'Andrea'});

    if (!partnerTmp1) return PartnerDao.create({
        name: 'Andrea',
        rate: '4',
        address: '941 Progress Avenue',
        city: 'Toronto',
        postalCode: 'M1G3T8',
        longitude: '1',
        latitude: '1'

    });
};

module.exports = {
    partner
};