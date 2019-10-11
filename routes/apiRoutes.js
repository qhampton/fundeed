var db = require("../models");
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
  // all user profiles with search criteria
  app.get("/users/matches", function(req, res) {
    db.User.findAll().then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });

  // all profiles matched
  app.get("/profiles/:id", function(req, res) {
    db.profiles.findAll({
      where: {
        matchscore: true
      },
      include: [dbUser]
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // bring all chats
  app.get("/api/matches/:id", function(req, res) {
    db.chats.findAll({
      where: {
        message: req.param.id,
        lastTime: req.param.id
      },
      include: [db.matches]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving auth
  app.post("/api/new", function(req, res) {
    console.log("User Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO User (username, email) VALUES (?,?)";

    connection.query(dbQuery, [req.body.username, req.body.email], function(err, result) {
      if (err) throw err;
      console.log("User Credentials Successfully Saved!");
      res.end();
    });
  });

  // more user details saved
  app.post("/api/userAccount", function(req, res) {
    console.log(" More User Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO User (firstName, lastName, birthdate, gender, zipcode, searchRadius, ) VALUES (?,?,?,?,?,?)";

    connection.query(dbQuery, [req.body.username, req.body.email], function(err, result) {
      if (err) throw err;
      console.log("User Account Successfully Saved!");
      res.end();
    });
  });

  // specific category profile
  app.post("/api/profile", function(req, res) {
    console.log(" More User Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO Profiles (categoryType, about, lookingFor, match) VALUES (?,?,?,?)";

    connection.query(dbQuery, [req.body.categoryType, req.bodyout, req.body.lookingFor, req.body.match], function(err, result) {
      if (err) throw err;
      console.log("Profile Successfully Saved!");
      res.end();
    });
  });
  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.User.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
