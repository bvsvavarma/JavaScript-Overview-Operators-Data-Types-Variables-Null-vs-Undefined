console.log("Data Types in JS");

let myName = "Venkata";
console.log("myName", myName);
//to check data type of variable use typeof
console.log("typeof myName", typeof myName);

myName = 10;
console.log("myName", myName);
console.log("typeof myName", typeof myName);

myName = true;
console.log("myName", myName);
console.log("typeof myName", typeof myName);

let myDetails = {};
console.log("myDetails", myDetails);
console.log("typeof myDetails", typeof myDetails);

//data type of array is Object
let myDetailsArray = [];
console.log("myDetailsArray", myDetailsArray);
console.log("typeof myDetailsArray", typeof myDetailsArray);

//data type of null variable is Object
let myNullVariable = null;
console.log("myNullVariable", myNullVariable);
console.log("typeof myNullVariable", typeof myNullVariable);

//data type of undefined variable is undefined
let myUndefinedVariable;
console.log("myUndefinedVariable", myUndefinedVariable);
console.log("typeof myUndefinedVariable", typeof myUndefinedVariable);

//JS evaluate expression left tp right
let volExp1 = 16 + 4 + "Volvo";
console.log("volExp1", volExp1); // o/p -> 20Volvo

let volExp2 = "Volvo" + 16 + 4;
console.log("volExp2", volExp2); // o/p -> Volvo164
