// emailList.js
const patients = require("./0. patients");

// map executes the callback function for each element
const emailAdresses = patients.map(function(patient) {
  // return only the email addresses to the output array
  patients.corona = "no";
  return patient.email;
});

console.log(emailAdresses);