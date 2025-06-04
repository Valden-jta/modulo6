//?_________  Imports _________\\ 
const { Schema, model } = require("mongoose");

//?_________  Esquema de datos _________\\ 
const ProfessionalSchema = new Schema ({
    name: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: Number,
    weight: Number,
    height: Number,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: Number,
    profession: String
});


//?_________ Exports _________\\ 
module.exports = model("ProfessionalModel", ProfessionalSchema, "professional");