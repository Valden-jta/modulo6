//?_________  Imports _________\\
const ProfessionalModel = require("../model/professional");

//?_________ Funciones _________\\

function getProfessionals(req, res) {
  if (
    (req.query.name && !req.query.lastName) ||
    (!req.query.name && req.query.lastName)
  ) {
    // Si solo uno de los parámetros está presente, lanza error
    res.send({
      code: 400,
      error: true,
      message:
        "Introduce un nombre o apellido valido para buscar un documento concreto, o no introduzcas parametros para mostrar todos los documentos",
    });
  } else if (req.query.name && req.query.lastName) {
    // Si ambos parámetros están presentes, busca por ambos
    ProfessionalModel.find({
      name: req.query.name,
      lastName: req.query.lastName,
    })
      .then((result) => {
        if (result.length === 0) {
          console.log("Documento no encontrado");
          res.send({
            code: 400,
            error: true,
            message: "Documento no encontrado, revisa los parametros",
          });
        } else {
          console.log("Mostrando profesional con id: " + result[0]._id);
          res.send({
            code: 200,
            error: false,
            message: "Documento encontrado",
            data: result,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.send({
          code: 500,
          error: true,
          message: "Error interno del servidor",
        });
      });
  } else {
    // Si no hay parámetros, muestra todos
    ProfessionalModel.find({})
      .then((result) => {
        console.log(
          "Mostrando la lista completa de profesionales: " +
            result.length +
            " documentos"
        );
        res.send({
          code: 200,
          error: false,
          message: "Documentos encontrados: " + result.length,
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.send({
          code: 500,
          error: true,
          message: "Error interno del servidor",
        });
      });
  }
}

function postProfessionals(req, res) {
  ProfessionalModel.create({
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height,
    isRetired: req.body.isRetired,
    nationality: req.body.nationality,
    oscarsNumber: req.body.oscarsNumber,
    profession: req.body.profession,
  })
    .then((result) => {
      console.log(
        "Profesional guardado correctamente. Id nuevo documento: " + result._id
      );
      console.log(result);
      res.send({
        code: 200,
        error: false,
        message: "Profesional guardado correctamente",
        data: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.send({
        code: 500,
        error: true,
        message: "Error interno del servidor: " + err._message,
      });
    });
}

function putProfessionals(req, res) {
  // Determinar campos a modificar
  let updateFields = {};
  const fields = [
    "name",
    "lastName",
    "age",
    "weight",
    "height",
    "nationality",
    "oscarsNumber",
    "profession",
  ];

  fields.forEach((field) => {
    if (req.body[field] !== undefined) updateFields[field] = req.body[field];
  });
  if (req.body.isRetired !== undefined)
    updateFields.isRetired = req.body.isRetired;

  // Debes comprobar ambos parámetros para identificar el profesional
  if (!req.body.name || !req.body.lastName) {
    res.send({
      code: 400,
      error: true,
      message:
        "Introduce un nombre y apellido válidos para buscar un documento concreto",
    });
  } else {
    ProfessionalModel.findOneAndUpdate(
      { name: req.body.name, lastName: req.body.lastName }, // filtro más preciso
      { $set: updateFields },
      { new: true }
    )
      .then((result) => {
        if (!result) {
          res.send({
            code: 404,
            error: true,
            message: "Profesional no encontrado",
          });
        } else {
          console.log("Profesional actualizado correctamente");
          console.log(result);
          res.send({
            code: 200,
            error: false,
            message: "Profesional actualizado correctamente",
            data: result,
          });
        }
      })
      .catch((err) => {
        res.send({
          code: 500,
          error: true,
          message: "Error interno del servidor: " + err._message,
        });
      });
  }
}

function deleteProfessionals(req, res) {
  if (!req.body.name || !req.body.lastName) {
    res.send({
      code: 400,
      error: true,
      message:
        "Introduce un nombre y apellido válidos para borrar un documento concreto",
    });
    console.log(
      "Introduce un nombre y apellido válidos para borrar un documento concreto"
    );
  } else {
    ProfessionalModel.findOneAndDelete({
      name: req.body.name,
      lastName: req.body.lastName,
    })
      .then((result) => {
        if (!result) {
          res.send({
            code: 404,
            error: true,
            message: "Profesional no encontrado",
          });
        } else {
          console.log(
              "Profesional (con id " +
              result._id +
              ") eliminado correctamente"
          );
          console.log(result);
          res.send({
            code: 200,
            error: false,
            message: "Profesional eliminado correctamente",
            data: result,
          });
        }
      })
      .catch((err) => {
        res.send({
          code: 500,
          error: true,
          message: "Error interno del servidor: " + err._message,
        });
      });
  }
}

//?_________ Exports _________\\
module.exports = {
  getProfessionals,
  postProfessionals,
  putProfessionals,
  deleteProfessionals,
};
