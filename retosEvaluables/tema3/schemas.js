const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema(
  {
    teacher_first_name: String,
    teacher_last_name: String,
  },
  { _id: false }
);

const MarksSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  student_first_name: String,
  student_last_name: String,
  group_name: String,
  subject_name: String,
  teachers: [TeachersSchema],
});

let Mark = mongoose.model("Marks", MarksSchema);

module.exports = Mark;
