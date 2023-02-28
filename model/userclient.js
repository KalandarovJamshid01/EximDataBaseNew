module.exports = (sequelize, DataTypes) => {
  const User_Client = sequelize.define("user_clients", {
    CN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    O: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PINFL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TIN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    T: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serialNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
    },
    contractId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    bank_number: {
      type: DataTypes.STRING,
    },
    bank_name: {
      type: DataTypes.STRING,
    },
    MFO: {
      type: DataTypes.STRING,
    },
    NDC: {
      type: DataTypes.STRING,
    },
  });

  return User_Client;
};
