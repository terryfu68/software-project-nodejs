const {param} = require("express-validator");

module.exports.userEditValidationRules = () => [
  param("userId", "Invalid User ID format.").isLength({min: 24, max: 24})
];
