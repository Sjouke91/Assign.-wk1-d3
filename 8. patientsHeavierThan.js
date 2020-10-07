const patients = require("./patients");

//hardcode data
const weight = process.argv[2];

const specificPatients = patients.filter(function(patient){
    return patient.weight < weight;
})

console.log(specificPatients);
console.log("amount of patients in array", patients.length);
console.log("number of patients weighing less than", specificPatients.length);
