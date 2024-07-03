//  singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Suman",
    "full name": "Suman Modak",
    [mySym]: "myKey1",
    age: 23,
    location: "Greater Noida",
    email: "suman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "suman@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "suman@wipro.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
