var db = require("../models");
var dotenv = require("dotenv");
dotenv.config();

module.exports = function(app) {
  // Get all examples
  app.get("/api/user", function(req, res) {
    db.User.findAll({where: {auth_id: req.user.id}}).then(function(dbExamples) {
      res.json(dbExamples[0]);
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
    db.Profiles.findAll({
      where: {
        matchscore: true
      },
      include: [dbUser]
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // bring all chats
  app.get("/api/matches/", function(req, res) {
    db.Chats.findAll({
      where: {
        matchID: req.user.id
      }
      // ,include: [db.matches]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/chat/", function(req, res) {
    console.log(req.body.user, req.body.message);
    db.Chats.create({
      matchID: 666,
      user: req.body.user,
      lastTime: Date.now(),
      message: req.body.message
      // include: [db.matches]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving auth
  // Andres - Not sure if we need this, since Auth.js creates on blank return of ID search
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
  app.put("/userAccount", function(req, res) {
    // console.log(req.body);
    console.log(" More User Data:", req.user.id);
    // console.log(req.user);
    db.User.update({
      username: req.body.username,
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      birthdate: req.body.birthdate,
      email: req.body.email,
      zipcode: parseInt(req.body.zipcode),
      searchRadius: parseInt(req.body.searchRadius)
    }, {
      where: { auth_id: req.user.id }
    }).then(function(result) { res.json(result); }).catch(function(err) { console.log("Errr", err); });
    // var dbQuery = "INSERT INTO User (firstName, lastName, birthdate, gender, zipcode, searchRadius, ) VALUES (?,?,?,?,?,?)";

    // connection.query(dbQuery, [req.body.username, req.body.email], function(err, result) {
    //   if (err) throw err;
    //   console.log("User Account Successfully Saved!");
    //   res.end();
    // });
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
};
