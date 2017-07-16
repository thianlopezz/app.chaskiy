
var config = require('../config.json');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://'+config.mongodb.user+':'+config.mongodb.password+'@'+config.mongodb.host+':'+config.mongodb.port+'/'+config.mongodb.db);

var lodgingSchema = new Schema({
  nombre: { type: String, required: true },
  ciudad: String,
  pais: String,
  direccion: String,

  created_at: Date,
  updated_at: Date,
  usuCreated: String,
  usUpdated: String
});

lodgingSchema.pre('save', function(next) {

  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var Lodging = mongoose.model('Lodging', lodgingSchema);

module.exports = Lodging;