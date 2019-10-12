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
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Matches;
};
