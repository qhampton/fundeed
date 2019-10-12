module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("Profiles", {
    profileID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    auth_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Profiles;
};
