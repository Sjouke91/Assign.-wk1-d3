// patientByEmail.js
const patients = require("./0. patients");
const email = process.argv[2];

const specificPatient = patients.find(function(patient){
    return email === patient.email;
})

specificPatient === undefined ? console.log("user not found") :  console.log("OUTPUT:", specificPatient);