const patients = require("./0. patients");

function bmiCalc(weight, height) {
    var bmi = Math.round((weight / (height * height)) * 10) / 10;
    return bmi;
}

const patientsBmi = patients.map(function(patient){
    const { weight, height, firstName } = patient;

    let bmi = bmiCalc(weight, height);
    return {
        firstName: firstName,
        bmi: bmi}
})

console.log(patientsBmi);

const bmiGood = 25;

const patientUnhealthy = patientsBmi.filter(function(patient){
    return bmiGood < patient.bmi;
})

console.log(patientUnhealthy);
console.log(`amount of patients with bmi > 25`, patientUnhealthy.length);