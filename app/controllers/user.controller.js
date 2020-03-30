const UserDao = require('../services/user-dao');


exports.userProfile = async (req, res) => {
   try{
    //  const _id = req.params.id;
    //  const user = req.body;
     const user = await UserDao.findById(req.params.id);
     res.send(user);
   } catch (e) {
    console.log(`Something went wrong`, e.message);
    res.status(500).send(e.message);
   }
}
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

exports.delete = async (req, res) => {
  try {
    const _id = req.params.userId;
    const user = await UserDao.delete({_id, _id});
    res.status(200).send(user);
  } catch (e) {
    console.log(`Something went wrong`, e.message);
    res.status(500).send(e.message);
  }
};
