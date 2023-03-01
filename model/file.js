module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define("files", {
    url: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.String,
    },
    check: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return File;
};
