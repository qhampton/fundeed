module.exports = function(sequelize, DataTypes) {
  var Chats = sequelize.define("Chats", {
    matchID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastTime: DataTypes.TIME,
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Chats.associate = function(models) {
    Chats.belongsTo(models.Matches, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Chats;
};
