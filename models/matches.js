module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("Matches", {
    profileID1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    profileID2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
  return Matches;
};
