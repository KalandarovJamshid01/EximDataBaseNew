module.exports = (sequelize, DataTypes) => {
  const certificate_requests = sequelize.define("certificate_requests", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UUID: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  });
  return certificate_requests;
};
