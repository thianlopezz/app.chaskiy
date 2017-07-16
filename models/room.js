
var config = require('../config.json');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://'+config.mongodb.user+':'+config.mongodb.password+'@'+config.mongodb.host+':'+config.mongodb.port+'/'+config.mongodb.db);

var roomSchema = new Schema({
  name: { type: String, required: true },
  noRoom: { type: Number, required: true },

  estado:{ type: String, default:'A'},  
  
  created_at: Date,
  updated_at: Date,
  usuCreated: String,
  usUpdated: String
});

roomSchema.pre('save', function(next) {

  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;  

  next();
});

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;