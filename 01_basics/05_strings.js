const name = "suman"
const repoCount = 3

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('suman-SM-com')
// console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('S'));

const newStr = gameName.substring(0, 4)
// console.log(newStr);

const anotherStr = gameName.slice(-8, 3)
// console.log(anotherStr);

const newStrOne = "   suman   "
console.log(newStrOne.trim());


const url = "https://suman.com/suman%20modak"

console.log(url.replace('%20', '-'))

console.log(url.includes('suman'))

console.log(gameName.split('-'))