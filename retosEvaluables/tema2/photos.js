const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("photos", PhotoSchema);
