const patients = require("./patients");
const firstPatient = patients[0];

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
const weight = firstPatient[weight];
const age = firstPatient.age;
const height = firstPatient.height;

console.log(weight, age, height);

const { weight, age, height } = firstPatient;

console.log(weight, age, height);

// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
// const fullName = `${firstPatient.firstName} ${firstPatient.lastName}`;
// console.log(fullName);

// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"
// if(firstPatient.dailyExercise === "yes"){
//     console.log("This patient excersizes");
// }
// else{
//     console.log("This patient does not excersize");
// }

// console.log(firstPatient);

// 4. use a for loop to display all the patients

for(let i = 0; i < patients.length; i++){

    console.log(patients[i].lastName);
}


