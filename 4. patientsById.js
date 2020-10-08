const patients = require("./0. patients");
const id = parseInt(process.argv[2]);

// const specificPatient = patients.find(function(patient) {
//   if (id === patient.id) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log("OUTPUT:", specificPatient);

const specificPatient = patients.find(function(patient) {
    return id === patient.id;
  });

  specificPatient === undefined ? console.log("user not found") :   console.log("OUTPUT:", specificPatient);;
