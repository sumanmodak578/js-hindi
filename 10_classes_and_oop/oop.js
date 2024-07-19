const user = {
    username: "suman",
    loginCount: 8,
    signedIn: true,

    gotUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.gotUserDetails());
// console.log(this);

// const promise1 = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = () => {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('suman', 12, true)
const userTwo = new User('Asish', 0, false)
console.log(userOne.constructor);
// console.log(userTwo);

// when you use new keyword, 
// 1. first an empty object will create that called instance
// 2. constuctor function called 
// 3. every infomation you initialize will be injected in this keyword
// 4. function will get