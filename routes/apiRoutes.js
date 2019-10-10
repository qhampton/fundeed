var db = require("../models");
var secured = require('../lib/middleware/secured');
var dotenv = require("dotenv");
dotenv.config();

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
      console.log("log");
    });
  });

  app.post("/api/loginSuccess", secured(), function(req, res) {
    console.log("POSTING: ");
    // db.User.create()
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
