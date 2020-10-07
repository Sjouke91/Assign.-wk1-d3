const patients = require("./0. patients");

function bmrCalc(weight, height, age, excersize, male) {
    if(excersize === true && male === true){
        var bmr = 1.6 * (Math.round((10 * weight) + (6.25 * (height * 100)) - (5 * age)) + 50);
        return bmr
    }
    else if(excersize === true && male === false){
        var bmr = 1.6 * (Math.round((10 * weight) + (6.25 * (height * 100)) - (5 * age)) - 150);
        return bmr
    }
    else if(excersize === false && male === true){
        var bmr = 1.4 * (Math.round((10 * weight) + (6.25 * (height * 100)) - (5 * age)) + 50);
        return bmr
    }
    else {
        var bmr = 1.4 * (Math.round((10 * weight) + (6.25 * (height * 100)) - (5 * age)) - 150);
        return bmr
    }
}

const patientsBmr = patients.map(function(patient){
const { weight, height, age, excersize, gender, firstName } = patient;

let male = gender === 'm' ? true : false;

let bmr = Math.round(bmrCalc(weight, height, age, excersize, male));
return {
    firstName: firstName,
    bmr: bmr}
})

console.log(patientsBmr);