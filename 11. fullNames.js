const patients = require("./0. patients");

const fullNames = patients.map(function(patient){
    const { firstName, lastName} = patient
    return `${firstName} ${lastName}`;
})

console.log(fullNames);