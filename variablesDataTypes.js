//console methods
console.log("JS Variables and Data Types Learning");
console.error("error message display");
console.warn("warn message display");

// Variable declaration in JS
console.log("Variable Declarations");
/* 
let
    1. let keyword can be updated
    2. let keyword cannot be re-declared.
*/
let myName = "Satya";
console.log("myName", myName);

//let keyword can be updated
myName = "Satya Buddharaju";
console.log("myName", myName);

//let myName = "Hello"; Gives error saying cannot be re-declared

/* 
Const
    1. const keyword cannot be updated
    2. const keyword cannot be re-declared.
*/

const myLastName = "Buddharaju";
console.log("myLastName", myLastName);

//myLastName = "Buddharaju Venkata"; -> Assignment to constant variable.

const myObject = { firstName: "Satya", lastName: "Buddharaju" };
console.log("myObject", myObject);

myObject.firstName = "Venkata";
console.log("myObject", myObject);

//In case of const if you are modifying an Object/Array
//if we modify an property of an object you won't get an error.
//If you are modifying entire object/array you will get an error.

/* 
Var
    1. var keyword can be updated
    2. const keyword can be re-declared.
    3. Bad practice to use var
*/
var bootCamp = "LWC";
console.log("bootCamp", bootCamp);
//can be re-assigned
bootCamp = "BootCamp";
console.log("bootCamp", bootCamp);
//can be re-declared
var bootCamp = 10;
console.log("bootCamp", bootCamp);
//var is global scoped variable
console.log(window.bootCamp); // window is global class in JS
