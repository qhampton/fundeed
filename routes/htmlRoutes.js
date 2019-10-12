/* eslint-disable no-unused-vars */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/user", function(req, res) {
    console.log("hello?", req.user.id,req.user.displayName);
    db.User.findAll({where: {
      auth_id: req.user.id
    }}).then(function(dbExamples) {
      console.log("hello", dbExamples[0]);
      res.render("profile", {
        msg: "Welcome!",
        ourUser: dbExamples[0].dataValues
      });
    });
  });
  app.get("/chat", function(req, res) {
    console.log("hello?");
    res.render("chats");
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  console.log("404");
  app.get("*", function(req, res) {
    res.render("404");
  });
};
