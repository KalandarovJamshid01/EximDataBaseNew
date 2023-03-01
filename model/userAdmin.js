module.exports = (sequelize, DataTypes) => {
  const UserAdmins = sequelize.define("useradmins", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("declarant", "accountant", "admin"),
    },
    count_work: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    resetTokenHash: {
      type: DataTypes.STRING,
    },
    resetTokenVaqti: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  return UserAdmins;
};
