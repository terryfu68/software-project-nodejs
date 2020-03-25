const UserDao = require("../services/user-dao");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.signUp = async (req, res) => {
  try {
    const userBody = req.body;
    const user = await UserDao.create(userBody);
    res.status(200).send(user);
  } catch (e) {
    console.log(`Something went wrong`, e.message);
    res.status(500).send(e.message);
  }
};

module.exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await UserDao.findOne({email, isActive: true});

    if (!user) return res.status(401).send("Incorrect credentials.");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      const jwtToken = jwt.sign(
        {email: user.email, userId: user._id},
        "longer-secret-is-better",
        {expiresIn: "1h"}
      );
      res.status(200).send({token: jwtToken, expiresIn: 3600, customer: user});
    } else {
      res.status(401).send("Incorrect credentials.");
    }
  } catch (e) {
    console.log(`Something went wrong`, e.message);
    res.status(500).send(`Something went wrong`);
  }
};
