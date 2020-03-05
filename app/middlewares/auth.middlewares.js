const jwt = require("jsonwebtoken");
const {body} = require("express-validator");

module.exports.customerCreateValidationRules = () => [
  body("email", "Email cannot be empty").not().isEmpty(),
  body("password", "Must but at least 3 and max 10 in length").not().isEmpty().isLength({min: 3, max: 10}),
  body("username", "Must but at least 3 in length").not().isEmpty().isLength({min: 3}),
  body("firstName", "Must but at least 3 in length").not().isEmpty().isLength({min: 3}),
  body("lastName", "Must but at least 3 in length").not().isEmpty().isLength({min: 3}),
  body("phoneNumber", "Must but at least 11 in length").not().isEmpty().isLength({min: 3}),
];

module.exports.customerLoginValidationRules = () => [
  body("email", "Email cannot be empty").not().isEmpty(),
  body("password", "Must but at least 3 and max 10 in length").not().isEmpty().isLength({min: 3, max: 10}),
];

module.exports.authorize = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "longer-secret-is-better");
    next();
  } catch (error) {
    res.status(401).json({message: "No token provided"});
  }
};
