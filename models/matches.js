module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("Matches", {
    matchID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
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
      type: DataTypes.ENUM,
      values: [
        "Technology",
        "Outdoor Activites",
        "Indoor Activited",
        "Photography",
        "Food",
        "Nightlife",
        "Music"
      ]
    },

    matchScore: DataTypes.INTEGER
  });
  Matches.associate = function(models) {
    Matches.belongsTo(models.Profiles, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Matches;
};
