const UserDao = require('../services/user-dao');

exports.edit = async (req, res) => {
  try {
    const _id = req.params.userId;
    const user = req.body;
    const {nModified} = await UserDao.updateOne({...user, _id});
    res.send({modified: nModified});
  } catch (e) {
    console.log(`Something went wrong`, e.message);
    res.status(500).send(e.message);
  }
};
