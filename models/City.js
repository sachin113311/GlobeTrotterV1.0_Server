const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  city: String,
  country: String,
  clues: Array,
  fun_fact: Array,
  trivia: Array
});

module.exports = mongoose.model('City', citySchema);
