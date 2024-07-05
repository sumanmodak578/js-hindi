
// var c = 300

// Global Scope
let a = 300

if (true){
    // Block Scope
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "suman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "suman"

    if (username === "suman") {
        const website = "youtube"
        // console.log(username+website);
    }

    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num){  // functions
    return num + 1
}


console.log(addTwo(5));

const addTwo = function(num){ // Expressions
    return num + 2
}
