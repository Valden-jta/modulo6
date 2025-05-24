// * Modulos
const mongoose = require("mongoose");
const mongo = require("mongoose");
require('dotenv').config(); //Enviar usuario y contraseña de manera oculta

//  * Esquemas y funciones
const photos = require("./photos");
const functions = require("./functions");

// * Conexion a la base de datos
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@codenotch.dksifs1.mongodb.net/?retryWrites=true&w=majority&appName=codeNotch`;

mongoose.connect(uri)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error de conexión:", err));
