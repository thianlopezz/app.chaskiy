// grab the things we need
var mongoose = require('mongoose');
var config = require('../config.json');
var Schema = mongoose.Schema;

// create a schema
var passengerSchema = new Schema({
  nombre: String,
  correo: String,
  ident: {type: String, unique:true },
  pais: String,
  noContacto: String,

  estado:{ type: String, default:'A'},

  created_at: Date,
  updated_at: Date,
  usuCreated: String,
  usUpdated: String
});

// on every save, add the date
passengerSchema.pre('save', function(next) {

  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var Passenger = mongoose.model('Passenger', passengerSchema);

// make this available to our users in our Node applications
module.exports = Passenger;