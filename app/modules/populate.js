const UserDao = require("../services/user-dao");
const DishDao = require("../services/dish-dao");
const PartnerDao = require("../services/partner-dao");
const DishAvailabilityDao = require("../services/dishavailability-dao");
const OrderDao = require("../services/order-dao");
const OrderItemDao = require("../services/order-item-dao");


module.exports.users = async () => {
  const customer = {
    email: "ed@gmail.com",
    password: "123",
    firstName: "Eduardo",
    lastName: "Wickert",
    address: "25 Montgomery",
    city: "Toronto",
    phoneNumber: "6476161114",
    postalCode: "M4R0A1",
    role: "Customer"
  };

  const partner = {
    email: "p1@gmail.com",
    password: "123",
    companyName: "Fresh",
    phoneNumber: "999",
    postalCode: "M4R0A1",
    role: "Partner"
  };

  return UserDao.createAll([customer, partner]);
};

module.exports.partner = async () => {
  return PartnerDao.createAll([{
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
  return DishTypeDao.createMany([{
    typeName: "drink"
  },
    {
      typeName: "main"
    },
    {
      typeName: "dessert"
    }
  ]);
};

module.exports.dish = async () => {
  return DishDao.createMany([{
    name: "Chocolate Cake",
    description: "This is a chocolate cake",
    image: "https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1532533774/moms-chocolate-cake-XL-RECIPE0918.jpg?itok=MBMhBzj_"
  },
    {
      name: "Strawberry Cheesecake",
      description: "The best strawberry cheesecake in the city",
      image: "http://www.seranobakery.com/plugins/content/quickgallery/timthumb.php?src=http://www.seranobakery.com/images/bakery/traditional-cakes/2.Strawberry%20Cheesecake_resize.jpg&q=100&w=660&h=372&cc=FFFFFF&ct=1&zc=1&a=c"
    },
    {
      name: "Tiramisu",
      description: "The original Tiramisu",
      image: "http://www.seranobakery.com/plugins/content/quickgallery/timthumb.php?src=http://www.seranobakery.com/images/bakery/traditional-cakes/1.Tiramisu.jpg&q=100&w=660&h=372&cc=FFFFFF&ct=1&zc=1&a=c"
    },
    {
      name: "Mozzarela Pizza",
      description: "A lot of cheese on it",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
    },
    {
      name: "Pepperoni Pizza",
      description: "A regular pepperoni pizza",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85"
    },
    {
      name: "Coke",
      description: "A 500ml regular coke",
      image: "https://images-na.ssl-images-amazon.com/images/I/51iAZ2nZ4zL._SX425_.jpg"
    },
    {
      name: "Orange Juice",
      description: "This is a orange juice",
      image: "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX425_PIbundle-24,TopRight,0,0_AA425SH20_.jpg"
    },
    {
      name: "Deep Roots",
      description: "Apple, Carrot, Beet, Celery, Lemon (All Organic + Cold-Pressed), Organic Fermented Lemongrass",
      image: "https://cdn.shopify.com/s/files/1/0081/2285/9605/products/Greenhouse_300mL_DeepRoots_ProductShot_900x.png?v=1580499799"
    },
    {
      name: "Genius",
      description: "Cucumber, Pineapple, Celery, Spinach, Kale, Lemon (All Organic + Cold-Pressed), Organic Fermented Lemongrass, Himalayan Salt",
      image: "https://cdn.shopify.com/s/files/1/0081/2285/9605/products/Greenhouse_300mL_Genius_ProductShot_91e0fbfc-1e6c-46e6-9dbe-a52edc32551a_900x.png?v=1580500172"
    },
  ]);
};

module.exports.dishAvailability = async () => {
  const cake = await DishDao.findOne({
    name: "Chocolate Cake"
  });
  const pizza = await DishDao.findOne({
    name: "Mozzarela Pizza"
  });
  const juice = await DishDao.findOne({
    name: "Orange Juice"
  });
  const cheesecake = await DishDao.findOne({
    name: "Strawberry Cheesecake"
  });
  const tiramisu = await DishDao.findOne({
    name: "Tiramisu"
  });
  const pepperoni = await DishDao.findOne({
    name: "Pepperoni Pizza"
  });
  const coke = await DishDao.findOne({
    name: "Coke"
  });
  const deeproots = await DishDao.findOne({
    name: "Deep Roots"
  });
  const genius = await DishDao.findOne({
    name: "Genius"
  });

  return DishAvailabilityDao.createMany([{
    startDate: Date.now(),
    endDate: Date.now() + 3,
    originalPrice: 16,
    discountPrice: 9,
    quantity: 100,
    quantityTotal: 100,
    dish: cake._id
  },
    {
      startDate: Date.now(),
      endDate: Date.now() + 3,
      originalPrice: 20,
      discountPrice: 11,
      quantity: 45,
      quantityTotal: 45,
      dish: cheesecake._id
    },
    {
      startDate: Date.now(),
      endDate: Date.now() + 3,
      originalPrice: 25,
      discountPrice: 12.99,
      quantity: 25,
      quantityTotal: 25,
      dish: tiramisu._id
    },
    {
      startDate: Date.now() - 1,
      endDate: Date.now() + 2,
      originalPrice: 10,
      discountPrice: 6,
      quantity: 50,
      quantityTotal: 50,
      dish: pizza._id
    },
    {
      startDate: Date.now() - 1,
      endDate: Date.now() + 2,
      originalPrice: 12,
      discountPrice: 6,
      quantity: 150,
      quantityTotal: 150,
      dish: pepperoni._id
    },
    {
      startDate: Date.now() - 1,
      endDate: Date.now() + 2,
      originalPrice: 2.5,
      discountPrice: 1,
      quantity: 100,
      quantityTotal: 100,
      dish: coke._id
    },
    {
      startDate: Date.now(),
      endDate: Date.now() + 1,
      originalPrice: 8,
      discountPrice: 4.5,
      quantity: 75,
      quantityTotal: 75,
      dish: juice._id
    },
    {
      startDate: Date.now(),
      endDate: Date.now() + 1,
      originalPrice: 9,
      discountPrice: 4,
      quantity: 50,
      quantityTotal: 50,
      dish: deeproots._id
    },
    {
      startDate: Date.now(),
      endDate: Date.now() + 1,
      originalPrice: 7,
      discountPrice: 4,
      quantity: 75,
      quantityTotal: 75,
      dish: genius._id
    }
  ]);
};

module.exports.updateDishes = async () => {
  const dessert = await DishTypeDao.findOne({
    typeName: "dessert"
  });
  const main = await DishTypeDao.findOne({
    typeName: "main"
  });
  const drink = await DishTypeDao.findOne({
    typeName: "drink"
  });

  const cake = await DishDao.findOne({
    name: "Chocolate Cake"
  });
  const pizza = await DishDao.findOne({
    name: "Mozzarela Pizza"
  });
  const juice = await DishDao.findOne({
    name: "Orange Juice"
  });
  const cheesecake = await DishDao.findOne({
    name: "Strawberry Cheesecake"
  });
  const tiramisu = await DishDao.findOne({
    name: "Tiramisu"
  });
  const pepperoni = await DishDao.findOne({
    name: "Pepperoni Pizza"
  });
  const coke = await DishDao.findOne({
    name: "Coke"
  });
  const deeproots = await DishDao.findOne({
    name: "Deep Roots"
  });
  const genius = await DishDao.findOne({
    name: "Genius"
  });

  await DishDao.updateOne({
    _id: cake._id
  }, {
    $set: {
      dishType: dessert._id,
      partner: (await PartnerDao.findOne({
        name: "Serano Bakery"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: cake._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: cheesecake._id
  }, {
    $set: {
      dishType: dessert._id,
      partner: (await PartnerDao.findOne({
        name: "Serano Bakery"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: cheesecake._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: tiramisu._id
  }, {
    $set: {
      dishType: dessert._id,
      partner: (await PartnerDao.findOne({
        name: "Serano Bakery"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: tiramisu._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: pizza._id
  }, {
    $set: {
      dishType: main._id,
      partner: (await PartnerDao.findOne({
        name: "Pizza Hut"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: pizza._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: pepperoni._id
  }, {
    $set: {
      dishType: main._id,
      partner: (await PartnerDao.findOne({
        name: "Pizza Hut"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: pepperoni._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: coke._id
  }, {
    $set: {
      dishType: drink._id,
      partner: (await PartnerDao.findOne({
        name: "Pizza Hut"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: coke._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: juice._id
  }, {
    $set: {
      dishType: drink._id,
      partner: (await PartnerDao.findOne({
        name: "Greenhouse Juice Co"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: juice._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: deeproots._id
  }, {
    $set: {
      dishType: drink._id,
      partner: (await PartnerDao.findOne({
        name: "Greenhouse Juice Co"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: deeproots._id
        })).pop().id
      ]
    }
  });

  await DishDao.updateOne({
    _id: genius._id
  }, {
    $set: {
      dishType: drink._id,
      partner: (await PartnerDao.findOne({
        name: "Greenhouse Juice Co"
      })).id,
      dishAvailability: [
        (await DishAvailabilityDao.findAll({
          dish: genius._id
        })).pop().id
      ]
    }
  });
};

module.exports.clean = async () => {
  await UserDao.deleteAll();
  await DishDao.deleteAll();
  await DishAvailabilityDao.deleteAll();
  await OrderDao.deleteAll();
  await OrderItemDao.deleteAll();
};
