const CustomerDao = require('../services/customer-dao');
const DishTypeDao = require('../services/dishtype-dao');
const DishDao = require('../services/dish-dao');
const PartnerDao = require('../services/partner-dao');
const DishAvailabilityDao = require('../services/dishavailability-dao');

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

const dishType = async () => {
    await DishTypeDao.deleteAll();
    return DishTypeDao.createMany([{typeName: 'drink'}, {typeName: 'main'}, {typeName: 'dessert'}]);

};

const dish = async () => {
    let dessert = await DishTypeDao.findOne({'typeName': 'dessert'});
    let main = await DishTypeDao.findOne({'typeName': 'main'});
    let drink = await DishTypeDao.findOne({'typeName': 'drink'});

    return DishDao.createMany([
        {
            name: 'Chocolate Cake',
            description: 'This is a chocolate cake',
            image: 'Chocolate Cake Picture',
            dishType: dessert.id,
            partner: PartnerDao.id,
            dishAvailability: DishAvailabilityDao.dish
        },
        {
            name: 'Pizza',
            description: 'This is a pizza',
            image: 'Pizza Picture',
            dishType: main.id,
            partner: PartnerDao.id,
            dishAvailability: DishAvailabilityDao.dish
        },
        {
            name: 'Orange Juice',
            description: 'This is a orange juice',
            image: 'Orange Juice Picture',
            dishType: drink.id,
            partner: PartnerDao.id,
            dishAvailability: DishAvailabilityDao.dish
        }]);

};


const dishavailability = async () => {
    DishAvailabilityDao.deleteAll();
    let cake = await (DishDao.findOne({'name': 'Chocolate Cake'}));
    let pizza = await (DishDao.findOne({'name': 'Pizza'}));
    let juice = await (DishDao.findOne({'name': 'Orange Juice'}));
    return DishAvailabilityDao.createMany([
        {
            startDate: Date.now(),
            endDate: Date.now() + 3,
            originalPrice: 16,
            discountPrice: 12,
            quantity: 3,
            quantityTotal: 6,
            dish: cake.id

        },
        {
            startDate: Date.now() - 1,
            endDate: Date.now() + 2,
            originalPrice: 12,
            discountPrice: 11,
            quantity: 5,
            quantityTotal: 10,
            dish: pizza.id

        },
        {
            startDate: Date.now(),
            endDate: Date.now() + 1,
            originalPrice: 8,
            discountPrice: 6,
            quantity: 10,
            quantityTotal: 20,
            dish: juice.id

        }]);

};


const partner = async () => {
    PartnerDao.deleteAll();
    let cakeId = (await (DishDao.findOne({'name': 'Chocolate Cake'}))).id;
    let pizzaId = (await (DishDao.findOne({'name': 'Pizza'}))).id;
    let juiceId = (await (DishDao.findOne({'name': 'Orange Juice'}))).id;

    return PartnerDao.createAll([
        {
            name: 'Serano Bakery',
            rate: 4.7,
            address: '830 Pape Ave',
            city: 'Toronto',
            postalCode: 'M4K 3T5',
            longitude: '43.682893',
            latitude: '-79.346803',
            dishes: [cakeId]

        },
        {
            name: 'Pizza Hut',
            rate: 2.6,
            address: '720 King St W',
            city: 'Toronto',
            postalCode: 'M5V 2T3',
            longitude: '43.643909',
            latitude: '-79.404150',
            dishes: [pizzaId]

        },
        {
            name: 'Greenhouse Juice Co',
            rate: 4.2,
            address: '5 Macpherson Ave',
            city: 'Toronto',
            postalCode: 'M5R 1W7',
            longitude: '43.678943',
            latitude: '-79.390782',
            dishes: [juiceId]

        }]);

};


const updatedish = async () => {
    let dessert = await (DishTypeDao.findOne({'typeName': 'dessert'}));
    let main = await (DishTypeDao.findOne({'typeName': 'main'}));
    let drink = await (DishTypeDao.findOne({'typeName': 'drink'}));

    let cakeId = (await (DishDao.findOne({'name': 'Chocolate Cake'}))).id;
    let pizzaId = (await (DishDao.findOne({'name': 'Pizza'}))).id;
    let juiceId = (await (DishDao.findOne({'name': 'Orange Juice'}))).id;


    DishDao.updateOne(
        {_id: cakeId},
        {
            name: 'Chocolate Cake',
            description: 'This is a chocolate cake',
            image: 'Chocolate Cake Picture',
            dishType: dessert.id,
            partner: (await PartnerDao.findOne({'name': 'Serano Bakery'})).id,
            dishAvailability: [(await DishAvailabilityDao.findAll({'dish': cakeId})).pop().id]
        });


    DishDao.updateOne(
        {_id: pizzaId},
        {
            name: 'Pizza',
            description: 'This is a pizza',
            image: 'Pizza Picture',
            dishType: main.id,
            partner: (await PartnerDao.findOne({'name': 'Pizza Hut'})).id,
            dishAvailability: [(await DishAvailabilityDao.findAll({'dish': pizzaId})).pop().id]
        });


    DishDao.updateOne(
        {_id: juiceId},
        {
            name: 'Orange Juice',
            description: 'This is a orange juice',
            image: 'Orange Juice Picture',
            dishType: drink.id,
            partner: (await PartnerDao.findOne({'name': 'Greenhouse Juice Co'})).id,
            dishAvailability: [(await DishAvailabilityDao.findAll({'dish': juiceId})).pop().id]
        });

    return;

};

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
    customer,
    dishtype: dishType,
    dish,
    dishavailability,
    partner,
    updatedish,
};
