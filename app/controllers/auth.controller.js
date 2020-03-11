const CustomerDao = require("../services/customer-dao");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.signUp = async (req, res) => {
  try {
    const {firstName, lastName, email, password, address, city, postalCode, phoneNumber} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = await CustomerDao.create({
      firstName, lastName, address,
      city, postalCode, phoneNumber, email, password: hashedPassword
    });
    res.status(200).send(customer);
  } catch (e) {
    console.log(`Something went wrong`, e.message);
    res.status(500).send(e.message);
  }
};

module.exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const customer = await CustomerDao.findOne({email});

    if (!customer) return res.status(401).send("Incorrect credentials.");

    const isPasswordCorrect = await bcrypt.compare(password, customer.password);

    if (isPasswordCorrect) {
      const jwtToken = jwt.sign(
          {email: customer.email, customerId: customer._id},
          "longer-secret-is-better",
          {expiresIn: "1h"}
      );
      res.status(200).send({token: jwtToken, expiresIn: 3600, customer});
    } else {
      res.status(401).send("Incorrect credentials.");
    }
  } catch (e) {
    console.log(`Something went wrong`, e.message);
    res.status(500).send(`Something went wrong`);
  }
};
