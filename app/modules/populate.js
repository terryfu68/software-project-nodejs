const CustomerDao = require("../services/customer-dao");
const DishTypeDao = require("../services/dishtype-dao");
const DishDao = require("../services/dish-dao");
const PartnerDao = require("../services/partner-dao");
const DishAvailabilityDao = require("../services/dishavailability-dao");
const OrderDao = require("../services/order-dao");
const OrderItemDao = require("../services/order-item-dao");

module.exports.customer = async () => {
  return CustomerDao.create({
    email: "ed@gmail.com",
    password: "nope",
    firstName: "Eduardo",
    lastName: "Wickert",
    address: "25 Montgomery",
    city: "Toronto",
    phoneNumber: "6476161114",
    postalCode: "M4R0A1",
    lastAccess: Date.now(),
    is2FA: false,
    isLocal: false
  });
};

module.exports.partner = async () => {
  return PartnerDao.createAll([
    {
      name: "Serano Bakery",
      rate: 4.7,
      address: "830 Pape Ave",
      city: "Toronto",
      postalCode: "M4K 3T5",
      longitude: 43.682893,
      latitude: -79.346803
    },
    {
      name: "Pizza Hut",
      rate: 2.6,
      address: "720 King St W",
      city: "Toronto",
      postalCode: "M5V 2T3",
      longitude: 43.643909,
      latitude: -79.40415
    },
    {
      name: "Greenhouse Juice Co",
      rate: 4.2,
      address: "5 Macpherson Ave",
      city: "Toronto",
      postalCode: "M5R 1W7",
      longitude: 43.678943,
      latitude: -79.390782
    }
  ]);
};

module.exports.dishType = async () => {
  return DishTypeDao.createMany([
    { typeName: "drink" },
    { typeName: "main" },
    { typeName: "dessert" }
  ]);
};

module.exports.dish = async () => {
  return DishDao.createMany([
    {
      name: "Chocolate Cake",
      description: "This is a chocolate cake",
      image: "Chocolate Cake Picture"
    },
    {
      name: "Pizza",
      description: "This is a pizza",
      image: "Pizza Picture"
    },
    {
      name: "Orange Juice",
      description: "This is a orange juice",
      image: "Orange Juice Picture"
    }
  ]);
};

module.exports.dishAvailability = async () => {
  const cake = await DishDao.findOne({ name: "Chocolate Cake" });
  const pizza = await DishDao.findOne({ name: "Pizza" });
  const juice = await DishDao.findOne({ name: "Orange Juice" });

  return DishAvailabilityDao.createMany([
    {
      startDate: Date.now(),
      endDate: Date.now() + 3,
      originalPrice: 16,
      discountPrice: 12,
      quantity: 3,
      quantityTotal: 6,
      dish: cake._id
    },
    {
      startDate: Date.now() - 1,
      endDate: Date.now() + 2,
      originalPrice: 12,
      discountPrice: 11,
      quantity: 5,
      quantityTotal: 10,
      dish: pizza._id
    },
    {
      startDate: Date.now(),
      endDate: Date.now() + 1,
      originalPrice: 8,
      discountPrice: 6,
      quantity: 10,
      quantityTotal: 20,
      dish: juice._id
    }
  ]);
};

module.exports.updateDishes = async () => {
  const dessert = await DishTypeDao.findOne({ typeName: "dessert" });
  const main = await DishTypeDao.findOne({ typeName: "main" });
  const drink = await DishTypeDao.findOne({ typeName: "drink" });

  const cake = await DishDao.findOne({ name: "Chocolate Cake" });
  const pizza = await DishDao.findOne({ name: "Pizza" });
  const juice = await DishDao.findOne({ name: "Orange Juice" });

  await DishDao.updateOne(
    { _id: cake._id },
    {
      $set: {
        dishType: dessert._id,
        partner: (await PartnerDao.findOne({ name: "Serano Bakery" })).id,
        dishAvailability: [
          (await DishAvailabilityDao.findAll({ dish: cake._id })).pop().id
        ]
      }
    }
  );

  await DishDao.updateOne(
    { _id: pizza._id },
    {
      $set: {
        dishType: main._id,
        partner: (await PartnerDao.findOne({ name: "Pizza Hut" })).id,
        dishAvailability: [
          (await DishAvailabilityDao.findAll({ dish: pizza._id })).pop().id
        ]
      }
    }
  );

  await DishDao.updateOne(
    { _id: juice._id },
    {
      $set: {
        dishType: drink._id,
        partner: (await PartnerDao.findOne({ name: "Greenhouse Juice Co" })).id,
        dishAvailability: [
          (await DishAvailabilityDao.findAll({ dish: juice._id })).pop().id
        ]
      }
    }
  );
};

module.exports.clean = async () => {
  await CustomerDao.deleteAll();
  await PartnerDao.deleteAll();
  await DishTypeDao.deleteAll();
  await DishDao.deleteAll();
  await DishAvailabilityDao.deleteAll();
};
