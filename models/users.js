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
      type: DataTypes.DATE,
      validate: {
        len: [1]
      }
    },
    gender: DataTypes.STRING,
    Zipcode: {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastLogin: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "inactive"],
      defaultValue: "active"
    }
  });
  return User;
};
