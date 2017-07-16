
var config = require('../config.json');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aerolineaSchema = new Schema({
  nombre: { type: String, required: true },
  
  estado:{ type: String, default:'A'},
  
  created_at: Date,
  updated_at: Date,
  usuCreated: String,
  usUpdated: String
});

aerolineaSchema.pre('save', function(next) {

  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var aerolineas = mongoose.model('aerolineas', aerolineaSchema);

module.exports = aerolineas;