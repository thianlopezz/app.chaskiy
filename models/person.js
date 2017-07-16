// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/prUser');

// create a schema
var personSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

personSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 

  return this.name;
};

// the schema is useless so far
// we need to create a model using it
var Person = mongoose.model('Person', personSchema);

// make this available to our users in our Node applications
module.exports = Person;