const dbConfig = require("./../config/db_config");

const user_clients = require("./userclient");
const user_admins = require("./userAdmin");
const photos = require("./photo");
const notifies = require("./notifies");
const news = require("./news");
const feedback = require("./feedback");
const step = require("./steps");
const comment = require("./comment");
const message = require("./message");
const port_office = require("./port_offices");
const file = require("./file");
const document = require("./document");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user_admins = user_admins(sequelize, DataTypes);
db.user_clients = user_clients(sequelize, DataTypes);
db.photos = photos(sequelize, DataTypes);
db.notifies = notifies(sequelize, DataTypes);
db.news = news(sequelize, DataTypes);
db.feedbacks = feedback(sequelize, DataTypes);
db.steps = step(sequelize, DataTypes);
db.comments = comment(sequelize, DataTypes);
db.messages = message(sequelize, DataTypes);
db.port_offices = port_office(sequelize, DataTypes);
db.files = file(sequelize, DataTypes);
db.documents = document(sequelize, DataTypes);

db.user_clients.belongsTo(db.photos, {
  foreignKey: "photo_id",
});
db.user_admins.belongsTo(db.photos, {
  foreignKey: "photo_id",
});
db.news.belongsTo(db.photos, {
  foreignKey: "photo_id",
});

db.notifies.belongsTo(db.documents, {
  foreignKey: "document_id",
});

db.steps.belongsTo(db.documents, {
  foreignKey: "document_id",
});
db.comments.belongsTo(db.documents, {
  foreignKey: "document_id",
});
db.messages.belongsTo(db.documents, {
  foreignKey: "document_id",
});

db.documents.belongsTo(db.files, {
  foreignKey: "transport_nak_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "invoice_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "package_list_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "contract_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "certificate_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "extra_doc_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "product_list_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "prochie_doc_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "completed_file_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "facture_file_id",
});
db.documents.belongsTo(db.files, {
  foreignKey: "certificate_found_id",
});
db.documents.belongsTo(db.feedbacks, {
  foreignKey: "feedback_id",
});
db.documents.belongsTo(db.port_offices, {
  foreignKey: "port_office_id",
});
db.documents.belongsTo(db.user_clients, {
  foreignKey: "client_id",
});
db.documents.belongsTo(db.user_admins, {
  foreignKey: "declarant_id",
});
db.documents.belongsTo(db.user_admins, {
  foreignKey: "accountant_id",
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
