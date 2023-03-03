module.exports = (sequelize, DataTypes) => {
  const Code_TNVD = sequelize.define("code_tnv", {
    code: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
  });
  return Code_TNVD;
};
