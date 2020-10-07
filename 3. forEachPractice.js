const patients = require("./patients");

// // - for each patient log their weight

// function viewAge(patient){
//     const { firstName, lastName, age} = patient;
//     const viewAge = `${firstName} ${lastName} - ${age}`;
//     console.log(viewAge);
// }

// patients.forEach(viewAge);

// patients.forEach(function(patient){
//     const { firstName, lastName, age} = patient;
//     const viewAge = `${firstName} ${lastName} - ${age}`;
//     console.log(viewAge);
// })

// // - for each patient, log their last name and gender

// function viewAgeGender(patient){
//     const { lastName, age, gender} = patient;
//     const viewAgeGender = `${lastName}, Age of patient is: ${age}, gender: ${gender}`

//     console.log(viewAgeGender);
// }

// patients.forEach(viewAgeGender);

// patients.forEach(function(patient){
//     const { lastName, age, gender} = patient
//     const viewAgeGender = `${lastName}, Age of patient is: ${age}, gender: ${gender}`
    
//     console.log(viewAgeGender);
// })

// // - for each patient,
// //      - if they are of gender 'm' console.log Mr. and their lastName
// //      - if they are of gender 'f' console.log Mrs. and their lastName

patients.forEach(function(patient){
    const { gender, lastName} = patient;
    const prefix = gender === "m" ? "mr" : "mrs";
    console.log(`${prefix} ${lastName}`);
})

console.log(patients);


// function correctTitle(patient){
//     const { gender, lastName} = patient;
//     if(gender === "m"){
//         console.log(`Mr. ${lastName}`);
//     } else if(gender === "f"){
//         console.log(`Mrs. ${lastName}`);
//     } else {
//         console.log("gender not specified");
//     }
// }

// patients.forEach(correctTitle)