const patients = require("./0. patients");

const anonymizedData = patients.map(function(patient){
    const { id, height, weight, dailyExercise, age } = patient;
    return {
        patientID: id, 
        patientHeight: height, 
        patientWeight: weight, 
        DaylyExcersize: dailyExercise, 
        PatientAge: age}
})

console.log(anonymizedData);

