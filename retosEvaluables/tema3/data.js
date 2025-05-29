const mongoose = require("mongoose");
const Mark = require("./schemas");

// Instancias de profesores
let teacher1 = { teacher_first_name: "Marta", teacher_last_name: "Sánchez" };
let teacher2 = { teacher_first_name: "Pedro", teacher_last_name: "Gómez" };
let teacher3 = { teacher_first_name: "Lucía", teacher_last_name: "Fernández" };
let teacher4 = { teacher_first_name: "Javier", teacher_last_name: "Moreno" };
let teacher5 = { teacher_first_name: "Sara", teacher_last_name: "Díaz" };
let teacher6 = { teacher_first_name: "David", teacher_last_name: "Ortega" };
let teacher7 = { teacher_first_name: "Paula", teacher_last_name: "Jiménez" };
let teacher8 = { teacher_first_name: "Raúl", teacher_last_name: "Castro" };
let teacher9 = { teacher_first_name: "Carmen", teacher_last_name: "Vega" };
let teacher10 = { teacher_first_name: "Alberto", teacher_last_name: "Romero" };
let teacher11 = { teacher_first_name: "Beatriz", teacher_last_name: "Navarro" };
let teacher12 = { teacher_first_name: "Manuel", teacher_last_name: "Gil" };
let teacher13 = {
  teacher_first_name: "Patricia",
  teacher_last_name: "Herrera",
};
let teacher14 = { teacher_first_name: "Sergio", teacher_last_name: "Rubio" };

let mark1 = new Mark({
  date: new Date("2025/06/09"),
  mark: 8,
  student_first_name: "Ana",
  student_last_name: "García",
  group_name: "Presencial",
  subject_name: "Fundamentos de programación",
  teachers: [teacher1],
});

let mark2 = new Mark({
  date: new Date("2025/06/10"),
  mark: 7,
  student_first_name: "Ana",
  student_last_name: "García",
  group_name: "Presencial",
  subject_name: "Front end I -  Maquetacion y JavaScript",
  teachers: [teacher3],
});

let mark3 = new Mark({
  date: new Date("2025/06/11"),
  mark: 9,
  student_first_name: "Ana",
  student_last_name: "García",
  group_name: "Presencial",
  subject_name: "Front end II - Angular",
  teachers: [teacher5, teacher6, teacher4],
});

let mark4 = new Mark({
  date: new Date("2025/06/12"),
  mark: 6,
  student_first_name: "Ana",
  student_last_name: "García",
  group_name: "Presencial",
  subject_name: "Back end I - Node y Express",
  teachers: [teacher7, teacher8, teacher2],
});

let mark5 = new Mark({
  date: new Date("2025/06/13"),
  mark: 10,
  student_first_name: "Ana",
  student_last_name: "García",
  group_name: "Presencial",
  subject_name: "Back end II - Bases de datos relacionales",
  teachers: [teacher9, teacher10, teacher11],
});

let mark6 = new Mark({
  date: new Date("2025/06/16"),
  mark: 8,
  student_first_name: "Ana",
  student_last_name: "García",
  group_name: "Presencial",
  subject_name: "Back end III - Bases de datos no relacionales",
  teachers: [teacher11, teacher12, teacher9],
});

let mark7 = new Mark({
  date: new Date("2025/06/17"),
  mark: 7,
  student_first_name: "Ana",
  student_last_name: "García",
  group_name: "Presencial",
  subject_name: "Front end III - React",
  teachers: [teacher13, teacher14, teacher4],
});

// ---- Luis Martínez ----
let mark8 = new Mark({
  date: new Date("2025/06/09"),
  mark: 6,
  student_first_name: "Luis",
  student_last_name: "Martínez",
  group_name: "Presencial",
  subject_name: "Fundamentos de programación",
  teachers: [teacher1],
});

let mark9 = new Mark({
  date: new Date("2025/06/10"),
  mark: 8,
  student_first_name: "Luis",
  student_last_name: "Martínez",
  group_name: "Presencial",
  subject_name: "Front end I -  Maquetacion y JavaScript",
  teachers: [teacher3],
});

let mark10 = new Mark({
  date: new Date("2025/06/11"),
  mark: 7,
  student_first_name: "Luis",
  student_last_name: "Martínez",
  group_name: "Presencial",
  subject_name: "Front end II - Angular",
  teachers: [teacher5, teacher6, teacher4],
});

let mark11 = new Mark({
  date: new Date("2025/06/12"),
  mark: 9,
  student_first_name: "Luis",
  student_last_name: "Martínez",
  group_name: "Presencial",
  subject_name: "Back end I - Node y Express",
  teachers: [teacher7, teacher8, teacher2],
});

let mark12 = new Mark({
  date: new Date("2025/06/13"),
  mark: 8,
  student_first_name: "Luis",
  student_last_name: "Martínez",
  group_name: "Presencial",
  subject_name: "Back end II - Bases de datos relacionales",
  teachers: [teacher9, teacher10, teacher11],
});

let mark13 = new Mark({
  date: new Date("2025/06/16"),
  mark: 7,
  student_first_name: "Luis",
  student_last_name: "Martínez",
  group_name: "Presencial",
  subject_name: "Back end III - Bases de datos no relacionales",
  teachers: [teacher11, teacher12, teacher9],
});

let mark14 = new Mark({
  date: new Date("2025/06/17"),
  mark: 10,
  student_first_name: "Luis",
  student_last_name: "Martínez",
  group_name: "Presencial",
  subject_name: "Front end III - React",
  teachers: [teacher13, teacher14, teacher4],
});

// ---- Sofía López ----
let mark15 = new Mark({
  date: new Date("2025/06/09"),
  mark: 9,
  student_first_name: "Sofía",
  student_last_name: "López",
  group_name: "Online",
  subject_name: "Fundamentos de programación",
  teachers: [teacher1],
});

let mark16 = new Mark({
  date: new Date("2025/06/10"),
  mark: 8,
  student_first_name: "Sofía",
  student_last_name: "López",
  group_name: "Online",
  subject_name: "Front end I -  Maquetacion y JavaScript",
  teachers: [teacher3],
});

let mark17 = new Mark({
  date: new Date("2025/06/11"),
  mark: 7,
  student_first_name: "Sofía",
  student_last_name: "López",
  group_name: "Online",
  subject_name: "Front end II - Angular",
  teachers: [teacher5, teacher6, teacher4],
});

let mark18 = new Mark({
  date: new Date("2025/06/12"),
  mark: 10,
  student_first_name: "Sofía",
  student_last_name: "López",
  group_name: "Online",
  subject_name: "Back end I - Node y Express",
  teachers: [teacher7, teacher8, teacher2],
});

let mark19 = new Mark({
  date: new Date("2025/06/13"),
  mark: 8,
  student_first_name: "Sofía",
  student_last_name: "López",
  group_name: "Online",
  subject_name: "Back end II - Bases de datos relacionales",
  teachers: [teacher9, teacher10, teacher11],
});

let mark20 = new Mark({
  date: new Date("2025/06/16"),
  mark: 9,
  student_first_name: "Sofía",
  student_last_name: "López",
  group_name: "Online",
  subject_name: "Back end III - Bases de datos no relacionales",
  teachers: [teacher11, teacher12, teacher9],
});

let mark21 = new Mark({
  date: new Date("2025/06/17"),
  mark: 7,
  student_first_name: "Sofía",
  student_last_name: "López",
  group_name: "Online",
  subject_name: "Front end III - React",
  teachers: [teacher13, teacher14, teacher4],
});

// ---- Carlos Ruiz ----
let mark22 = new Mark({
  date: new Date("2025/06/09"),
  mark: 8,
  student_first_name: "Carlos",
  student_last_name: "Ruiz",
  group_name: "Online",
  subject_name: "Fundamentos de programación",
  teachers: [teacher1],
});

let mark23 = new Mark({
  date: new Date("2025/06/10"),
  mark: 6,
  student_first_name: "Carlos",
  student_last_name: "Ruiz",
  group_name: "Online",
  subject_name: "Front end I -  Maquetacion y JavaScript",
  teachers: [teacher3],
});

let mark24 = new Mark({
  date: new Date("2025/06/11"),
  mark: 9,
  student_first_name: "Carlos",
  student_last_name: "Ruiz",
  group_name: "Online",
  subject_name: "Front end II - Angular",
  teachers: [teacher5, teacher6, teacher4],
});

let mark25 = new Mark({
  date: new Date("2025/06/12"),
  mark: 7,
  student_first_name: "Carlos",
  student_last_name: "Ruiz",
  group_name: "Online",
  subject_name: "Back end I - Node y Express",
  teachers: [teacher7, teacher8, teacher2],
});

let mark26 = new Mark({
  date: new Date("2025/06/13"),
  mark: 8,
  student_first_name: "Carlos",
  student_last_name: "Ruiz",
  group_name: "Online",
  subject_name: "Back end II - Bases de datos relacionales",
  teachers: [teacher9, teacher10, teacher11],
});

let mark27 = new Mark({
  date: new Date("2025/06/16"),
  mark: 10,
  student_first_name: "Carlos",
  student_last_name: "Ruiz",
  group_name: "Online",
  subject_name: "Back end III - Bases de datos no relacionales",
  teachers: [teacher11, teacher12, teacher9],
});

let mark28 = new Mark({
  date: new Date("2025/06/17"),
  mark: 7,
  student_first_name: "Carlos",
  student_last_name: "Ruiz",
  group_name: "Online",
  subject_name: "Front end III - React",
  teachers: [teacher13, teacher14, teacher4],
});

// ---- Elena Pérez ----
let mark29 = new Mark({
  date: new Date("2025/06/09"),
  mark: 9,
  student_first_name: "Elena",
  student_last_name: "Pérez",
  group_name: "Online",
  subject_name: "Fundamentos de programación",
  teachers: [teacher1],
});

let mark30 = new Mark({
  date: new Date("2025/06/10"),
  mark: 8,
  student_first_name: "Elena",
  student_last_name: "Pérez",
  group_name: "Online",
  subject_name: "Front end I -  Maquetacion y JavaScript",
  teachers: [teacher3],
});

let mark31 = new Mark({
  date: new Date("2025/06/11"),
  mark: 6,
  student_first_name: "Elena",
  student_last_name: "Pérez",
  group_name: "Online",
  subject_name: "Front end II - Angular",
  teachers: [teacher5, teacher6, teacher4],
});

let mark32 = new Mark({
  date: new Date("2025/06/12"),
  mark: 10,
  student_first_name: "Elena",
  student_last_name: "Pérez",
  group_name: "Online",
  subject_name: "Back end I - Node y Express",
  teachers: [teacher7, teacher8, teacher2],
});

let mark33 = new Mark({
  date: new Date("2025/06/13"),
  mark: 7,
  student_first_name: "Elena",
  student_last_name: "Pérez",
  group_name: "Online",
  subject_name: "Back end II - Bases de datos relacionales",
  teachers: [teacher9, teacher10, teacher11],
});

let mark34 = new Mark({
  date: new Date("2025/06/16"),
  mark: 8,
  student_first_name: "Elena",
  student_last_name: "Pérez",
  group_name: "Online",
  subject_name: "Back end III - Bases de datos no relacionales",
  teachers: [teacher11, teacher12, teacher9],
});

let mark35 = new Mark({
  date: new Date("2025/06/17"),
  mark: 9,
  student_first_name: "Elena",
  student_last_name: "Pérez",
  group_name: "Online",
  subject_name: "Front end III - React",
  teachers: [teacher13, teacher14, teacher4],
});

// Array de marks
let marks = [
  mark1,
  mark2,
  mark3,
  mark4,
  mark5,
  mark6,
  mark7,
  mark8,
  mark9,
  mark10,
  mark11,
  mark12,
  mark13,
  mark14,
  mark15,
  mark16,
  mark17,
  mark18,
  mark19,
  mark20,
  mark21,
  mark22,
  mark23,
  mark24,
  mark25,
  mark26,
  mark27,
  mark28,
  mark29,
  mark30,
  mark31,
  mark32,
  mark33,
  mark34,
  mark35,
];

// Array de teachers
let teachers = [
  teacher1,
  teacher2,
  teacher3,
  teacher4,
  teacher5,
  teacher6,
  teacher7,
  teacher8,
  teacher9,
  teacher10,
  teacher11,
  teacher12,
  teacher13,
  teacher14,
];

module.exports = { marks, teachers };
