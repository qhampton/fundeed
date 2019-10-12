module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("Matches", {
    profileID1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profileID2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryType: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    matching: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Success: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    profileID: {
      type: DataTypes.STRING
    }
  });
  // Matches.associate = function(models) {
  //   Matches.belongsTo(models.User, {
  //     onDelete: "cascade",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Matches;
};
