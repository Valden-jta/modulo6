// Imports
require("dotenv").config();
const mongoose = require("mongoose");
const { marks } = require("./data");
const Mark = require("./schemas");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@codenotch.dksifs1.mongodb.net/?retryWrites=true&w=majority&appName=codeNotch`;

//  Inserta los documentos, y si ya estan insertos, se salta este paso
mongoose
  .connect(uri)
  .then(() => {
    console.log("Conectado a MongoDB");
    return Mark.countDocuments();
  })
  .then((count) => {
    if (count === 0) {
      let data = marks.map((mark) => ({
        date: mark.date,
        mark: mark.mark,
        student_first_name: mark.student_first_name,
        student_last_name: mark.student_last_name,
        group_name: mark.group_name,
        subject_name: mark.subject_name,
        teachers: mark.teachers.map((t) => ({
          teacher_first_name: t.teacher_first_name,
          teacher_last_name: t.teacher_last_name,
        })),
      }));
      return Mark.insertMany(data);
    } else {
      console.log("La colección ya tiene datos, no se insertan duplicados.");
      return [];
    }
  })
  // ************************ CONSULTAS ************************ \\
  //   1. Nota media de los alumnos de una asignatura concreta
  .then(() => {
    return Mark.aggregate([
      {
        $match: {
          subject_name: "Back end III - Bases de datos no relacionales",
        },
      },
      {
        $group: {
          _id: "$subject_name",
          "nota media": { $avg: "$mark" },
        },
      },
    ]);
  })
  .then((result) => {
    console.log("Consulta 1: ", result);
  })
  // 2. Calcula el número total de alumnos que hay en el bootcamp (incluir repetidos)
  .then(() => {
    return Mark.aggregate([
      {
        $group: {
          _id: {
            first_name: "$student_first_name",
            last_name: "$student_last_name",
          },
        },
      },
      { $count: "Total alumnos" },
    ]);
  })
  .then((result) => {
    console.log("Consulta 2: ", result);
  })
  //   3. Listar el nombre y apellidos de todos los alumnos (incluir repetidos)
  .then(() => {
    return Mark.aggregate([
      {
        $group: {
          _id: {
            Alumno: {
              $concat: ["$student_first_name", " ", "$student_last_name"],
            },
          },
        },
      },
    ]);
  })
  .then((result) => {
    console.log("Consulta 3: ", result);
    return mongoose.disconnect();   //! NO TE OLVIDES DE QUITAR ESTO CUANDO AVANCES
  })
//   TODO: 4.
//   TODO: 5.
//   TODO: 6.
//   TODO: 7.
  // .then((result) => {
  //   console.log("Consulta 7", result);
  //   return mongoose.disconnect();
  // })
  .catch((err) => {
    console.error("Error al insertar los datos:", err);
    mongoose.disconnect();
  });
