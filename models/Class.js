const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
  _id: { type: String, required: true },
  ClassName: { type: String },
});

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;
