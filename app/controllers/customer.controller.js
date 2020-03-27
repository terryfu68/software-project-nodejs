const CustomerDao = require("../services/customer-dao");

// module.exports.getCustomer = async (req, res) => {
//   const { customerId } = req.params.userId;
//   const customer = await userSchema.find({ _id: customerId });
//   res.status(200).send(customer || {});
// };
//
// module.exports.updateCustomer = (req, res) => {
//   userSchema.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body
//     },
//     (error, data) => {
//       if (error) {
//         return next(error);
//         console.log(error);
//       } else {
//         res.json(data);
//         console.log("User successfully updated!");
//       }
//     }
//   );
// };
//

