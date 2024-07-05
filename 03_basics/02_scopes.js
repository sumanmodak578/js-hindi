
// var c = 300

// Global Scope
let a = 300

if (true){
    // Block Scope
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}


console.log(a);
// console.log(b);
// console.log(c);