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
