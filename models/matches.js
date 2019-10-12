module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("Matches", {
    profileID1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profileID2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryType: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    match: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Success: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
