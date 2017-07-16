const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../../models/user');

var Room = require('../../models/room');
var Aerolinea = require('../../models/aerolinea');
var Passenger = require('../../models/passenger');
var Reserve = require('../../models/reserve');

var config = require('../../config.json');

// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.post('/auth', (req, res) => {
  // Get posts from the mock api
  console.log("lol");
  // This should ideally be replaced with a service that connects to MongoDB
  // axios.post(`${API}/posts`)
  //   .then(posts => {

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
            var token = jwt.sign(user, config.secret, {
              expiresIn: "1h" // expires in 24 hours
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
    // })
    // .catch(error => {
    //   res.status(500).send(error)
    // });
});

// route middleware to verify a token
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  // axios.get(`${API}/posts`)
  //   .then(posts => {

  //   	var chris = new User({
		// 	  name: 'Chris',
		// 	  username: 'sevilayha007',
		// 	  password: 'password' 
		// 	});

  //   	chris.save(function(err) {
		//   if (err) throw err;
		//   res.status(200).json({message:'User saved successfully!'});
		// });
	    User.find({}, function(err, users) {
		  if (err) throw err;

		  // object of all the users
		  res.status(200).json(users);
		});
    // })
    // .catch(error => {
    //   res.status(500).send(error)
    // });
});

// get all Rooms
router.get('/rooms', (req, res) => {

    Room.find({estado: 'A'}, function(err, _rooms) {
    if (err) throw err;
    res.status(200).json(_rooms);
  });
      
});

// create room
router.post('/rooms', (req, res) => {

  var room = new Room({
  name: req.body.name,
  noRoom: req.body.noRoom
});

room.save(function(err) {
  if (err) throw err;

  res.status(200).json(true);
});
      
});

// update room
router.put('/rooms/:id/', (req, res) => {

  // get a user with ID of 1
  room.findById(req.params.id, function(err, room) {
    if (err) throw err;

    // change the users location
    room.name = req.body.name;
    room.noRoom = req.body.noRoom;

    // save the user
    room.save(function(err) {
      if (err) throw err;

      res.status(200).json(true);
    });

  });
      
});

// delete room
router.delete('/rooms/:id/', (req, res) => {

  room.findById(req.params.id, function(err, room) {
    if (err) throw err;

    room.estado = 'I';

    room.save(function(err) {
      if (err) throw err;

      res.status(200).json(true);
    });

  });
      
});

// get all aerolinea
router.get('/aerolinea', (req, res) => {

    Aerolinea.find({estado: 'A'}, function(err, _aerolineas) {
    if (err) throw err;
    res.status(200).json(_aerolineas);
  });
      
});

// get all passenger
router.get('/passenger', (req, res) => {

    passenger.find({estado: 'A'}, function(err, _passengers) {
    if (err) throw err;
    res.status(200).json(_passengers);
  });
      
});

//get by id
router.get('/passenger/:id/', (req, res) => {

  Passenger.findOne({
    ident: req.params.id,
    estado: 'A'
  }, function(err, _passenger) {

    if (err) throw err;

    res.status(200).json(_passenger);

  });
      
});

// create reserva
router.post('/reserve', (req, res) => {

  Passenger.findOne({
    ident: req.body.pass.ident,
    estado: 'A'
  }, function(err, _passenger) {

    if (err) throw err;

    // pass = _passenger;
    // console.log('->0'+_passenger);
    if(_passenger == null){

      var pass = new Passenger({
      nombre: req.body.pass.nombre,
      correo: req.body.pass.correo,
      ident: req.body.pass.ident,
      noContacto: req.body.pass.noContacto
    });

    pass.save(function(err) {
      if (err) throw err;

      var reserve = new Reserve({
        _idPass: pass._id,
        _idAe: req.body.aerolinea,
        noPersonas: req.body.noPersonas,
        reservados: req.body.habitaciones,
        notas: req.body.nota
      });

      reserve.save(function(err) {
        if (err) throw err;

        res.status(200).json(true);
      });

    });  

    }
    else
    {

      var reserve = new Reserve({
        _idPass: _passenger._id,
        _idAe: req.body.aerolinea,
        noPersonas: req.body.noPersonas,
        reservados: req.body.habitaciones,
        notas: req.body.nota
      });

      reserve.save(function(err) {
        if (err) throw err;

        res.status(200).json(true);
      });
    }


  });

      
});

//get by id
router.get('/passenger/', (req, res) => {

  Reserve.find({
    reservados: { feIni: { $gte: req.body.feIni},
                feFin: { $lte: req.body.feFin}
              },
    estado: 'A'
  }, function(err, _reserves) {

    if (err) throw err;

    var Ids = _reserves.map(function(c) { return c._idPass; });

    res.status(200).json(_passenger);

  });
      
});



module.exports = router;