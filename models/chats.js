module.exports = function(sequelize, DataTypes) {
  var Chats = sequelize.define("Chats", {
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
      allowNull: false
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
