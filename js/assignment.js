"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const responseEl = document.getElementById("response");
// create a mutable variable called age and do not assign it a value.
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    
    // Write your code below
if (isNaN(age)) {
    responseEl.textContent = "Please enter a valid number.";
} else if (age<18) {
    responseEl.textContent = "You're underage";
} else {
    responseEl.textContent = "You're an adult";
}
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
