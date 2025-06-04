//?_________  Imports _________\\
const { Schema, model } = require("mongoose");

//?_________  Esquema de datos _________\\
const PhotoSchema = new Schema({
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

//?_________ Exports _________\\
module.exports = model("Photo", PhotoSchema, "photos");
