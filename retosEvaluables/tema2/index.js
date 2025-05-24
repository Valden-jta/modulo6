// * Modulos
const mongoose = require("mongoose");
require("dotenv").config(); //Enviar usuario y contraseña de manera oculta

//  * Esquemas y funciones

const {
  connect,
  insertPhotos,
  getPhotos,
  updatePhotos,
  deletePhoto,
  deletePhotos,
} = require("./functions");

// * Datos
const data = require("./data.json");

// --------------------------------------------------------------------------- \\
// ? Comenta y descomneta cada función para ejecutarlas una por una


// * Subir todas las imagenes de los datos de muestra (las imagenes ya están subidas)
// connect(() => insertPhotos(data));


// * Subir una imagen
let newPhoto = {
  userName: "LuisaClimber",
  url: "https://www.freepik.es/foto-gratis/mujer-joven-pantalones-cortos-sujetador-deportivo-haciendo-ejercicio-pared-roca-interior_29719920.htm#fromView=search&page=1&position=25&uuid=7df37cd4-f3c5-4f2e-ac38-7e20d8149e55&query=climber",
  title: "Escaladora",
  description: "Mujer practicando escalada en un rocodromo",
};
connect(() => insertPhotos(newPhoto));

// * Buscar imagenes de un usuario
// connect(() => getPhotos("pepe_gamer"));

// * Modificar una imagen
// let title = "Golazo";
// let newDescription = "Un aficionado se lamenta por un gol recibido";
// connect(() => updatePhotos(title, newDescription));

// * Eliminar una foto
// let user = "LuisaClimber";
// let title = "Escaladora";
// connect(() => deletePhoto(user, title));

//  * ELiminar todas las fotos de un usario
// let user = "juanitoAtleti"
// connect(() => deletePhotos(user));