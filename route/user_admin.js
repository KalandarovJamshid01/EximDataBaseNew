const router = require("express").Router();
const Admin = require("./../controller/user_admins");

router.route("/").get(Admin.get_admins).post(Admin.add_admin);
module.exports = router;
