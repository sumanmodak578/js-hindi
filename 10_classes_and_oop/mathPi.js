const describtor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(describtor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const mynewobj = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi banegi");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    //writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);

    }

}