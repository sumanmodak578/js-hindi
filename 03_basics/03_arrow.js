const user = {
    username: "suman",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);  // this keyword refers to current context
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Asish"
// user.welcomeMessage()

// console.log(this); // in this case, this keyword refers to aa empty object, because we are in node right now, but if you in a browser than the scenario will be different, you can try by yourself

// function chai(){
//     let username = "suman"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "suman"
//     console.log(this.username);
// }

const chai = () => {
    let username = "suman"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)  // Implicit return
const addTwo = (num1, num2) =>  ({username: "suman"})


// console.log(addTwo(2,3));


const myArray = [2, 4, 6, 8]

// myArray.forEach()