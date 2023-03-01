module.exports = (sequelize, DataTypes) => {
  const Port_Office = sequelize.define("port_offices", {
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    link_map: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
  });
  return Port_Office;
};
