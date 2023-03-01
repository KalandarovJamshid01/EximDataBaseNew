const express = require("express");

const app = express();
const photo = require("./../route/photo");
const users = require("./../route/user_client");
const admins = require("./../route/user_admin");

app.use(express.json());

app.use("/api/v1/photos", photo);
app.use("/api/v1/users", users);
app.use("/api/v1/admins", admins);

module.exports = app;
