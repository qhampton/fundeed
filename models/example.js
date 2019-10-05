module.exports = function(sequelize, DataTypes) {
  var USER = sequelize.define("User", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return USER;
};
