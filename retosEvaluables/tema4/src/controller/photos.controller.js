//?_________  Imports _________\\

const photosModel = require("../model/photos");

//?_________ Funciones _________\\

function getPhotos(req, res) {
  if (req.query.userName == null) {
    res.send("Se debe proporcionar un nombre de usuario");
  } else {
    photosModel
      .find({ userName: req.query.userName })
      .then((result) => {
        console.log("Obteniendo imagenes de: ", req.query.userName);
        if (!result)
          throw new Error(
            "No se encontró el documento. Revisa los datos introducidos."
          );
        else {
          console.log(result);
          res.send(result);
        }
      })
      .catch((err) => {
        console.error("Error al obtener documentos", err);
        process.exit(-1);
      });
  }
}
function postPhotos(req, res) {
  // uso create() para aprovechar las validaciones del modelo
  photosModel
    .create({
      userName: req.body.userName,
      url: req.body.url,
      title: req.body.title,
      description: req.body.description,
    })
    .then((result) => {
      res.send(result);
      console.log("Documento con id " + result._id + " creado correctamente");
    })
    .catch((err) => {
      console.error("Error al crear documentoo", err);
      process.exit(-1);
    });
}
function putPhotos(req, res) {
  photosModel
    .findOne({ title: req.body.title })
    .then((original) => {
      console.log("documento original:");
      console.log(original);
      return photosModel.findOneAndUpdate(
        { title: req.body.title },
        { $set: { description: req.body.description } },
        { new: true }
      );
    })
    .then((result) => {
      console.log("Documento modificado correctamente:");
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log("Error al modificar documento", err);
      process.exit(-1);
    });
}

function delPhotos(req, res) {
  if (req.query.userName != null && req.query.title != null) {
    photosModel
      .findOneAndDelete({
        userName: req.query.userName,
        title: req.query.title,
      })
      .then((result) => {
        if (!result)
          throw new Error(
            "No se encontró el documento. Revisa los datos introducidos."
          );
        else {
          res.send(result);
          console.log(
            result.deletedCount +
              " documento, con " +
              result._id +
              ", eliminado correctamente:"
          );
          console.log(result);
        }
      })
      .catch((err) => {
        console.log("Error al eliminar el documento", err);
        process.exit(-1);
      });
  } else if (req.query.userName != null && req.query.title == null) {
    photosModel
      .deleteMany({ userName: req.query.userName })
      .then((result) => {
        console.log(result.deletedCount);
        if (result.deletedCount === 0)
          throw new Error(
            "No se encontró el usuario. Revisa los datos introducidos."
          );
        else {
          console.log(result);
          res.send(result);
          console.log(
            result.deletedCount +
              "imagenes de " +
              result.userName +
              " eliminadas correctamente"
          );
        }
      })
      .catch((err) => {
        console.log("Error al eliminar el documento", err);
        process.exit(-1);
      });
  } else {
    let message = "Debes introducir al menos el nombre de usuario";
    res.send(message);
    console.log(message);
  }
}

//?_________ Exports _________\\

module.exports = { getPhotos, postPhotos, putPhotos, delPhotos };
