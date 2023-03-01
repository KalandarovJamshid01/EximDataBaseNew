const express = require("express");

const app = express();
const photo = require("./../route/photo");
const users = require("./../route/user_client");

app.use(express.json());

app.use("/api/v1/photos", photo);
app.use("/api/v1/users", users);

module.exports = app;
