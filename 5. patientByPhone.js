const patients = require("./0. patients");
const phoneNumber = process.argv[2];

const specificPatient = patients.find(function(patient){
    return phoneNumber === patient.phoneNumber;
})

specificPatient === undefined ? console.log("patient not found") : console.log(specificPatient);
