module.exports = (sequelize, DataTypes) => {
  const certificate_load = sequelize.define("certificates", {
    code: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
    owner: {
      type: DataTypes.STRING,
    },
  });

  return certificate_load;
};
