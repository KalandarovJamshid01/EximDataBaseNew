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
const file = require("./doc_file");
const document = require("./document");
const Code_TNVD = require("./code_tnvd");
const certificate_load = require("./certificate_load");
const code_tnvd_request = require("./code_tnvd_request");
const certificate_request = require("./certificate_request");

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
db.code_tnvd = Code_TNVD(sequelize, DataTypes);
db.certificate_load = certificate_load(sequelize, DataTypes);
db.code_tnvdes = code_tnvd_request(sequelize, DataTypes);
db.certificate_requests = certificate_request(sequelize, DataTypes);

//---------Photo relationship------------
db.user_clients.belongsTo(db.photos, {
  foreignKey: {
    name: "photo_id",
    allowNull: true,
  },
});
db.user_admins.belongsTo(db.photos, {
  foreignKey: "photo_id",
});
db.news.belongsTo(db.photos, {
  foreignKey: "photo_id",
});

//----------Document relationship other models
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

// ---------------Files relationship
db.files.belongsTo(db.documents, {
  foreignKey: {
    name: "document_id",
    allowNull: true,
  },
});
db.files.belongsTo(db.code_tnvdes, {
  foreignKey: {
    name: "code_tnv_id",
    allowNull: true,
  },
});
db.files.belongsTo(db.certificate_requests, {
  foreignKey: {
    name: "certificate_request_id",
    allowNull: true,
  },
});

//----------Document model relationship
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

//-------------certificate model relationship
db.certificate_requests.belongsTo(db.feedbacks, {
  foreignKey: "feedback_id",
});

db.certificate_requests.belongsTo(db.user_clients, {
  foreignKey: "client_id",
});
db.certificate_requests.belongsTo(db.user_admins, {
  foreignKey: "declarant_id",
});
db.certificate_requests.belongsTo(db.user_admins, {
  foreignKey: "accountant_id",
});
//-------------codetnvd model relationship
db.code_tnvdes.belongsTo(db.feedbacks, {
  foreignKey: "feedback_id",
});

db.code_tnvdes.belongsTo(db.user_clients, {
  foreignKey: "client_id",
});
db.code_tnvdes.belongsTo(db.user_admins, {
  foreignKey: "declarant_id",
});
db.code_tnvdes.belongsTo(db.user_admins, {
  foreignKey: "accountant_id",
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
