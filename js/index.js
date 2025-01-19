// Prevent us from attempting to use variables
// that are not declared
"use strict"
//if statement
let danIsADog = false;

if (danIsADog === true) {
    console.log("WOOF");
}

let davidIsAGamer = false;
if (davidIsAGamer === true) {
    console.log("WIN");
}
//if/else statement
let danIsADog = false;

if (danIsADog === true) {
    console.log("WOOF");
} else {
    console.log("Dan is a human.");
}

let davidIsAGamer = false;

if (davidIsAGamer === true) {
    console.log("cool");
} else {
    console.log("I am now the master.");
}
//if/else/if/else statement
let healthPoints = 5;

if (healthPoints >= 10) {
    console.log("Hero is healthy.");
} else if (healthPoints < 10 && healthPoints >= 5) {
    console.log("Hero is slightly damaged.");
} else {
    console.log("Hero is close to death.");
}

let ManaPoints = 10;

if (ManaPoints >= 20) {
    console.log("Good to go");
} else if (ManaPoints < 20 && ManaPoints >= 10) {
    
}