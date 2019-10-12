module.exports = function(sequelize, DataTypes) {
  var Chats = sequelize.define("Chats", {
    matchID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auth_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastTime: DataTypes.STRING,
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Chats.associate = function(models) {
    Chats.belongsTo(models.Matches, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Chats;
};
