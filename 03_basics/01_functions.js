
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");

}

// sayMyName()

// function addTwoNumbers(num1, num2){   // These are Parameters (num1, num2)
//    console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){   // These are Parameters (num1, num2)
    return num1 + num2;
 }

const result = addTwoNumbers(2, 3) // These are Arguments (2, 3)

// console.log(result);

function loginUserMessage(username = "user"){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Suman"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){  // Rest Operator
    return num1
}

// console.log(calculateCartPrice(200,300,400));

const user = {
    username: "suman",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "asish",
    price: 139
})

const myNewArray = [200, 300, 400 ,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,3,4]));