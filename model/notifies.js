module.exports = (sequelize, DataTypes) => {
  const Notifies = sequelize.define("notifies", {
    header: {
      type: DataTypes.STRING,
      defaultValue: "https://eximerp.uz/public/images/User-Icon.png",
    },
    userId: {
      type: DataTypes.STRING,
      defaultValue: "default.png",
    },
    uz_title: {
      type: DataTypes.STRING,
    },
    ru_title: {
      type: DataTypes.STRING,
    },
    en_title: {
      type: DataTypes.STRING,
    },
    tr_title: {
      type: DataTypes.STRING,
    },
    uz_message: {
      type: DataTypes.STRING,
    },
    ru_message: {
      type: DataTypes.STRING,
    },
    en_message: {
      type: DataTypes.STRING,
    },
    tr_message: {
      type: DataTypes.STRING,
    },
    view: {
      type: DataTypes.Boolean,
      defaultValue: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "default",
    },
  });

  return Notifies;
};
