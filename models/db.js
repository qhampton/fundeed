"use strict";

const Sequelize = require("sequelize");
const env = require("./env");
const sequelize = new Sequelize(
  env.DATABASE_NAME,
  env.DATABASE_USERNAME,
  env.DATABASE_PASSWORD,
  {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
      underscored: true
    }
  }
);

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require("../models/users.js")(sequelize, Sequelize);
db.categories = require("../models/categories.js")(sequelize, Sequelize);
db.profiles = require("../models/profieles.js")(sequelize, Sequelize);
db.matches = require("../models/matches.js")(sequelize, Sequelize);
db.chats = require("../models/chats.js")(sequelize, Sequelize);

//Relations
db.User.hasMany(db.Profiles);
db.User.hasMany(db.Matches);
db.User.hasMany(db.Chats);
db.Profiles.hasMany(db.Matches);
db.Profiles.belongsTo(db.User);
db.Matches.hasOne(db.Chat);
db.Matches.belongsTo(db.Profiles);
db.Chats.belongsTo(db.Matches);

module.exports = db;
