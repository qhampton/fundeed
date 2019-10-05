module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("Profiles", {
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
    about: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    lookingFor: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    match: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Profiles;
};
