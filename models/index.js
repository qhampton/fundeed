"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.users = require("../models/users.js")(sequelize, Sequelize);
// db.categories = require("../models/categories.js")(sequelize, Sequelize);
db.profiles = require("../models/profiles.js")(sequelize, Sequelize);
db.matches = require("../models/matches.js")(sequelize, Sequelize);
db.chats = require("../models/chats.js")(sequelize, Sequelize);
//Relations
db.User.hasMany(db.Profiles);
db.User.hasMany(db.Matches);
db.User.hasMany(db.Chats);
db.Profiles.hasMany(db.Matches);
db.Profiles.belongsTo(db.User);
db.Matches.hasOne(db.Chats);
db.Matches.belongsTo(db.Profiles);
db.Chats.belongsTo(db.Matches);
module.exports = db;

module.exports = db;
