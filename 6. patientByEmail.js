// patientByEmail.js
const patients = require("./patients");
const email = process.argv[2];

const specificPatient = patients.find(function(patient){
    return email === patient.email;
})

specificPatient === undefined ? console.log("user not found") :  console.log("OUTPUT:", specificPatient);