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
          "avg": { $avg: "$mark" },
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
        $project: {
          _id: 0,
          Alumno: {
            $concat: ["$student_first_name", " ", "$student_last_name"],
          },
        },
      },
    ]);
  })
  .then((result) => {
    console.log("Consulta 3: ", result);
  })
  //   4. Listar el nombre y los apellidos de todos los profesores (incluir repetidos)
  .then(() => {
    return Mark.aggregate([
      { $unwind: "$teachers" },
      {
        $project: {
          _id: 0,
          Professor: {
            $concat: [
              "$teachers.teacher_first_name",
              " ",
              "$teachers.teacher_last_name",
            ],
          },
        },
      },
    ]);
  })
  .then((result) => {
    console.log("Consulta 4: ", result);
  })
  //   5. Mostrar el numero total de alumnos por grupo, ordenados por grupo en orden inverso al alfabeto
  .then(() => {
    return Mark.aggregate([
      {
        $group: {
          _id: {
            groupName: "$group_name",
            student: {
              $concat: ["$student_first_name", " ", "$student_last_name"],
            },
          },
        },
      },
      {
        $group: { _id: { Group: "$_id.groupName" }, totalStudents: { $sum: 1 } },
      },
      { $sort: { _id: -1 } },
    ]);
  })
  .then((result) => {
    console.log("Consulta 5: ", result);
  })
  //   6. Obten el top 5 de los nombres de asignaturas cuya nota media sea mayor que 5
  .then(() => {
    return Mark.aggregate([
      { $group: { _id: "$subject_name", avg: { $avg: "$mark" } } },
      { $sort: { avg: -1 } },
      { $limit: 5 },
    ]);
  })
  .then((result) => {
    console.log("Consulta 6: ", result);
  })
  //   TODO: 7. Calcular el numero de profesores que hay por cada asignatura (incluir repetidos)
  .then(() => {
    return Mark.aggregate([
      { $unwind: "$teachers" },
      { $group: {
          _id: {
            subject: "$subject_name",
            totalTeacher: {$concat: ["$teachers.teacher_first_name"," ","$teachers.teacher_last_name"]}}
          },
        },
      { $group: { _id: { Subject: "$_id.subject" }, totalTeachers: { $sum: 1 } }  }
    ]);
  })
  .then((result) => {
    console.log("Consulta 7: ", result);
    return mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error con la consulta:", err);
    mongoose.disconnect();
  });
