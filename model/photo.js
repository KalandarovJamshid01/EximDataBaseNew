module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define("photos", {
    url: {
      type: DataTypes.STRING,
      defaultValue: "https://eximerp.uz/public/images/User-Icon.png",
    },
    filename: {
      type: DataTypes.STRING,
      defaultValue: "default.png",
    },
  });

  return Photo;
};
