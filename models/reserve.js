// grab the things we need
var mongoose = require('mongoose');
var config = require('../config.json');
var Schema = mongoose.Schema;

// create a schema
var reserveSchema = new Schema({

  _idPass: String,
  _idAe: String,
  noPersonas: {type: Number, required: true},
  notas: String,


  reservados: [{
    _id: String,
    feIni: Date,
    feFin: Date
  }],

  estado:{ type: String, default:'A'},

  created_at: Date,
  updated_at: Date,
  usuCreated: String,
  usUpdated: String
});

// on every save, add the date
reserveSchema.pre('save', function(next) {

  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var Reserve = mongoose.model('Reserve', reserveSchema);

// make this available to our users in our Node applications
module.exports = Reserve;