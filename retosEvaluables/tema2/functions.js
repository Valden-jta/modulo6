// * Modulos
const mongoose = require("mongoose");
//  * Esquema
const photos = require("./photos");

// * Funciones
// ? CONEXION A LA BD
function connect(action) {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@codenotch.dksifs1.mongodb.net/?retryWrites=true&w=majority&appName=codeNotch`;

  mongoose
    .connect(uri)
    .then(() => {
      console.log("Conectado a MongoDB");
      return action();
    })
    .catch((err) => console.error("Error de conexión:", err));
}

// ? SUBIDA DE FOTOS
// Detecta si es una única imagen o un array, y aplica insertMany/insertOne según el caso
function insertPhotos(data) {
  if (Array.isArray(data) && data.length > 1) {
    photos
      .insertMany(data)
      .then((resp) => {
        console.log("Documentos subidos correctamente");
        console.log(resp);
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log("Error al subir los datos: ", err);
      });
  } else {
    photos
      .insertOne(data)
      .then((resp) => {
        console.log("Documento subido correctamente");
        console.log(resp);
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log("Error al subir el documento: ", err);
      });
  }
}

// ? OBTENER FOTOS DE UN USUARIO
// Dado un usuario, devuelve todas sus imágenes
function getPhotos(user) {
  photos
    .find({ userName: user })
    .then((resp) => {
      console.log("Obteniendo imagenes de: ", user);
      if (!resp)
        throw new Error(
          "No se encontró el documento. Revisa los datos introducidos."
        );
      else console.log(resp);
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log("Error al obtener documentos", err);
      mongoose.disconnect();
    });
}

// ? MODIFICAR FOTOS
// Dado un titulo y una descripcion, modifica la descripion de la foto
function updatePhotos(title, description) {
  photos
    .findOne({ title: title })
    .then((original) => {
      console.log("documento original:");
      console.log(original);
      return photos.findOneAndUpdate(
        { title: title },
        { $set: { description: description } },
        { new: true }
      );
    })
    .then((resp) => {
      console.log("Documento modificado correctamente:");
      console.log(resp);
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log("Error al modificar documento", err);
      mongoose.disconnect();
    });
}

// ? ELIMINAR UNA FOTO
// Dado un usuario y un titulo, elimina esa imagen
function deletePhoto(user, title) {
  photos
    .findOneAndDelete({ userName: user, title: title })
    .then((resp) => {
      if (!resp)
        throw new Error(
          "No se encontró el documento. Revisa los datos introducidos."
        );
      else {
        console.log(resp);
        console.log("El siguiente documento se ha eliminado correctamente:");
      }
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log("Error al eliminar el documento", err);
      mongoose.disconnect();
    });
}

// ? ELIMINAR TODAS LAS FOTOS
function deletePhotos(user) {
  photos
    .deleteMany({ userName: user })
    .then((resp) => {
      if (resp.deletedCount === 0) {
        throw new Error(
          "No se encontró el usuario. Revisa los datos introducidos."
        );
        console.log(resp);
      } else {
        console.log("imagenes de " + user + " eliminadas correctamente");
        console.log(resp);
      }
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log("Error al eliminar los documentos", err);
      mongoose.disconnect();
    });
}
// Dado un usuario, elimina todas sus imágenes

module.exports = {
  connect,
  insertPhotos,
  getPhotos,
  updatePhotos,
  deletePhoto,
  deletePhotos,
};
