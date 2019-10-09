var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

/* GET user profile. */
router.get('/user', secured(), function(req, res, next) {
  /* eslint-disable-next-line */
  const { _raw, _json, ...userProfile } = req.user;
  res.render('profile', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  });
});

module.exports = router;
