module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("Matches", {
    auth_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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
    matchScore: DataTypes.INTEGER
  });
  Matches.associate = function(models) {
    Matches.belongsTo(models.Profiles, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Matches;
};
