const patients = require("./patients");

const height = process.argv[2];

const specificPatients = patients.filter(function(patient){
    return height < patient.height;
})

console.log(specificPatients);
console.log("total amount of patients in array", patients.length);
console.log("amount of patients longer than input", specificPatients.length);