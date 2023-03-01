module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("messages", {
    text: {
      type: DataTypes.STRING,
    },
    sender: {
      type: DataTypes.ENUM("user", "declarant"),
    },
    view: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sender_id: {
      type: DataTypes.STRING,
    },
    receiver_id: {
      type: DataTypes.STRING,
    },
  });
  return Message;
};
