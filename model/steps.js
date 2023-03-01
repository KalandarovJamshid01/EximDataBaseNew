module.exports = (sequelize, DataTypes) => {
  const Step = sequelize.define("steps", {
    step: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  return Step;
};
