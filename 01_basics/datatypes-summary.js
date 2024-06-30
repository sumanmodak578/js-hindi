// Primitive Data Type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);

const bigNumber = 43848374374983n


// Reference(Non Primitive) Type

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let obj = {
    name: "suman",
    age: 23,
}

const myFunc = function(){
    console.log("Hello World");
}
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof id);
// console.log(typeof bigNumber);


// console.log(typeof heros); 
// console.log(typeof obj); 
// console.log(typeof myFunc); // This is a function object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(Primitive Data Types), Heap memory(Non-Primitve Data Types)


// Call by Memory 

let myEmailName = "suman@google.com"

let anotherName = myEmailName
anotherName = "modak@google.com"

console.log(myEmailName);
console.log(anotherName);


// Call by Reference

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "example@google.com"

console.log(userOne.email);
console.log(userTwo.email);