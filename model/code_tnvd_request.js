module.exports = (sequelize, DataTypes) => {
  const code_tnvd = sequelize.define("code_tnvds", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UUID: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about_product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about_file: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  return code_tnvd;
};
