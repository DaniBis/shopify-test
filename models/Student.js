const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  _id: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  birth: { type: Date },
  country: { type: String }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
