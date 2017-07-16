const express = require('express');
const router = express.Router();

var config = require('../../config.json');
var User = require('../../models/user');

// Get all posts
router.post('/auth', (req, res) => {
  // Get posts from the mock api
  console.log("lol");
  // This should ideally be replaced with a service that connects to MongoDB
  axios.post(`${API}/posts`)
    .then(posts => {

  // find the user
      User.findOne({
        name: req.body.name
      }, function(err, user) {

        if (err) throw err;

        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

          // check if password matches
          if (user.password != req.body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {

            // if user is found and password is right
            // create a token
            var token = jwt.sign(user, app.get('superSecret'), {
              expiresInMinutes: 1440 // expires in 24 hours
            });

            // return the information including token as JSON
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token
            });
          }   

        }

      });
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;