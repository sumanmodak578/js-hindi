// Immedietly Invoked Function Expresions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

// (function defination)(exection call)      // IIFE

// IIFE execute the function on immediet purpose. In sometime because of Global scope polution, functions got affected. That is why we use iife to execute the function on immediate manner to avoid Global variables and declarations

( (name) => {
    console.log(`DB Connected Two ${name}`);
} )('suman');