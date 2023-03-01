module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define("docs", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UUID: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    rejim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tnvd: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    certificate_check: {
      type: DataTypes.BOOLEAN,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return Document;
};
