// if
const isUserloggedIn = true
const temperature = 25

// if (temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");

// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`)


// const balance = 1000

// if (balance > 500) console.log("test"),
// console.log("test2");

// if (balance < 500 ) {
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard){
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}