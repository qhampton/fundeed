var db = require("../models");
var dotenv = require("dotenv");
dotenv.config();

module.exports = function(app) {
  // Get all examples
  app.get("/examples", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
      console.log("log");
    });
  });
  // all user profiles with search criteria -doesn't work
  app.get("/users/profile", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.auth_id
      },
      include: [db.Profiles]
    }).then(function(dbProfile) {
      console.log(dbProfile);
      res.json(dbProfile);
    });
  });

  // all profiles matched - doesn't work
  app.get("/profiles/matches", function(req, res) {
    db.Profiles.findAll({
      where: {
        matchscore: true
      },
      include: [dbMatches]
    }).then(function(dbMatches) {
      res.json(dbMatches);
      console.log(dbMatches);
    });
  });

  // bring all chats -doesn't work
  app.get("/matches/chat", function(req, res) {
    db.Chats.findAll({
      where: {
        matchID: req.user.id
      }
      // ,include: [db.matches]
    }).then(function(dbChats) {
      res.json(dbChats);
      console.log(dbChats);
    });
  });

  app.post("/chat", function(req, res) {
    db.Chats.create({
      chatID: 1,
      matchID: 666,
      lastTime: Date.now(),
      message: req.body.message,
      include: [db.matches]
    }).then(function(dbUser) {
      res.json(dbUser);
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
      zipcode: parseInt(req.body.zipcode),
      searchRadius: parseInt(req.body.searchRadius)
    }, {
      where: {
        auth_id: req.user.id
      }
    }).then(function(result) {
      res.json(result);
    }).catch(function(err) {
      console.log("Errr", err);
    });
    // var dbQuery = "INSERT INTO User (firstName, lastName, birthdate, gender, zipcode, searchRadius, ) VALUES (?,?,?,?,?,?)";

    // connection.query(dbQuery, [req.body.username, req.body.email], function(err, result) {
    //   if (err) throw err;
    //   console.log("User Account Successfully Saved!");
    //   res.end();
    // });
  });

  // specific category profile -doesn't work
  app.post("/new/profile", function(req, res) {
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
