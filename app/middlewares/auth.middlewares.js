const jwt = require("jsonwebtoken");
const {body} = require("express-validator");

module.exports.userCreateValidationRules = () => [
  body("email", "Email cannot be empty").not().isEmpty(),
  body("password", "Must be at least 3 and max 10 in length").not().isEmpty().isLength({min: 3, max: 10}),
  body("role", "Cannot be empty").not().isEmpty().isString(),
  body("phoneNumber", "Phone number cannot be empty").not().isEmpty(),
];

module.exports.userLoginValidationRules = () => [
  body("email", "Email cannot be empty").not().isEmpty(),
  body("password", "Must be at least 3 and max 10 in length").not().isEmpty().isLength({min: 3, max: 10}),
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
