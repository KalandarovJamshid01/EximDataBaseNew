module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define("news", {
    uz_header: {
      type: DataTypes.STRING,
    },
    ru_header: {
      type: DataTypes.STRING,
    },
    en_header: {
      type: DataTypes.STRING,
    },
    tr_header: {
      type: DataTypes.STRING,
    },
    uz_text: {
      type: DataTypes.STRING,
    },
    ru_text: {
      type: DataTypes.STRING,
    },
    en_text: {
      type: DataTypes.STRING,
    },
    tr_text: {
      type: DataTypes.STRING,
    },
    owner: {
      type: DataTypes.STRING,
    },
  });
  return News;
};
