/*
//Definir el conjunto de números junto al peso (crédito) de cada elemento:-----
const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

//Multiplicar cada número (note) de la lista por su peso (crédito):-----------------
const notesWithCredit = notes.map(function (noteObject) {
  return noteObject.note * noteObject.credit;
});

//Sumar todos los elementos del array de elementos q fueron multiplicados por su peso(crédito)---------
const sumOfNotesWithCredit = notesWithCredit.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

//Sumar todos los pesos (créditos):-------------------------------
const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

const sumOfCredits = credits.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);


//Hacer la división entre ambas “sumas”:---------------------------
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
*/

const notes = [

  {
    course: "Educaión física",
    note: 10,
    credit: 2,
  },

  {
    course: "Programación",
    note: 8,
    credit: 5,
  },

  {
    course: "Finanzas",
    note: 7,
    credit: 5,
  },

];


const notesWithCredit = notes.map(
  function(noteObject){
    return noteObject.note * noteObject.credit;
  }
);//20, 40, 35
const sumOfNotesWithCredit = notesWithCredit.reduce(
  function(sum = 0, newVal){
    return sum + newVal;
  }
);//95



const credit = notes.map(
  function(noteObject){
    return noteObject.credit;
  }
);//2, 5, 5
const sumOfCredits = credit.reduce(
  function(sum = 0, newVal){
    return sum + newVal;
  }
);//12



const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;