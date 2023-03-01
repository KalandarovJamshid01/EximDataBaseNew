const db = require("./../model/index");

const Admin = db.user_admins;

const add_admin = async (req, res) => {
  try {
    const admin = await Admin.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      birth_date: req.body.birth_date,
      address: req.body.address,
      phone: req.body.phone,
      role: req.body.role,
    });
    res.status(201).json(admin);
  } catch (error) {
    res.status(404).json(error);
  }
};

const get_admins = async (req, res, next) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { add_admin, get_admins };
