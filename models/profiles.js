module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("Profiles", {
    categoryType: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    // lookingFor: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   len: [1]
    // }
  });
  Profiles.associate = function(models) {
    Profiles.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Profiles;
};
