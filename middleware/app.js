const app = require("express")();
const photo = require("./../route/photo");

app.use("/api/v1/photos", photo);
module.exports = app;
