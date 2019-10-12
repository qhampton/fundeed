module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    auth_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    birthdate: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    zipcode: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1]
      }
    },
    searchRadius: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1]
      }
    },
    ziplist: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    bio: DataTypes.TEXT,
    lastLogin: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
      validate: {
        len: [1]
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Profiles, {
      onDelete: "cascade"
    });
  };

  return User;
};
