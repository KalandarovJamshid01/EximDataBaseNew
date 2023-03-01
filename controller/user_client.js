const db = require("./../model/index");

const User = db.user_clients;

const add_user = async (req, res) => {
  try {
    const user = await User.create({
      CN: req.body.CN,
      O: req.body.O,
      PINFL: req.body.PINFL,
      TIN: req.body.TIN,
      T: req.body.T,
      alias: req.body.alias,
      serialNumber: req.body.serialNumber,
      role: req.body.role,
      contractId: req.body.contractId,
      email: req.body.email,
      phone: req.body.phone,
      bank_number: req.body.bank_number,
      bank_name: req.body.bank_name,
      MFO: req.body.MFO,
      NDC: req.body.NDC,
      photo_id: req.body.photo_id,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};

const get_all_users = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  add_user,
  get_all_users,
};
