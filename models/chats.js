module.exports = function(sequelize, DataTypes) {
  var Chats = sequelize.define("Chats", {
    chatID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    matchID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastTime: DataTypes.TIME,
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  return Chats;
};
