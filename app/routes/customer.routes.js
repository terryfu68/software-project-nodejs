const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

// const validateCreateBody = [
//   check("userName")
//   .not()
//   .isEmpty()
//   .isLength({
//     min: 3
//   }),
//   check("firstName")
//   .not()
//   .isEmpty()
//   .isLength({
//     min: 3
//   })
//   .withMessage("First Name must be atleast 3 characters long"),
//   check("lastName")
//   .not()
//   .isEmpty()
//   .isLength({
//     min: 3
//   })
//   .withMessage("Last Name must be at least 3 characters long"),
//   check("email", "Email is required")
//   .not()
//   .isEmpty(),
//   check("password", "Password should be between 5 to 8 characters long")
//   .not()
//   .isEmpty()
//   .isLength({
//     min: 8,
//     max: 20
//   })
// ];

module.exports = app => {
  // router.get("/:customerId", authController.getCustomer);
  //
  // // Update User
  // router.put("/:customerId", authController.updateCustomer);
  //
  // Delete User
  router.delete("/:customerId", customerController.deleteCustomer);
  app.use('/customer', router);
};