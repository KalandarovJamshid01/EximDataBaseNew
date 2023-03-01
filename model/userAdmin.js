module.exports = (sequelize, DataTypes) => {
  const UserAdmins = sequelize.define("useradmins", {
    firstName: {
      type: DataTypes.STRING,
    },
  });

  return UserAdmins;
};
