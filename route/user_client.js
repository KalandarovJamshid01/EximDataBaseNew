const router = require("express").Router();
const User = require("./../controller/user_client");

router.route("/").get(User.get_all_users).post(User.add_user);

module.exports = router;
