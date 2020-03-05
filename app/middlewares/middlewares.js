const {validationResult} = require("express-validator");

/*
* Chained validations are causing duplicated entries on errors.
* I'll solve this later.
* */

module.exports.validate = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));

  return res.status(422).send(extractedErrors);
};
