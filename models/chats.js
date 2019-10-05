module.exports = function(sequelize, DataTypes) {
  var Chats = sequelize.define("Chats", {
    lastTime: DataTypes.TIMESTAMP,
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  return Chats;
};
