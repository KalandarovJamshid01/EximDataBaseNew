module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comments", {
    text: {
      type: DataTypes.STRING,
    },
    owner: {
      type: DataTypes.ENUM("client", "declarant", "accountant", "admin"),
    },
  });
  return Comment;
};
