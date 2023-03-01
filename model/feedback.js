module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define("feedbacks", {
    text: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  });
  return Feedback;
};
