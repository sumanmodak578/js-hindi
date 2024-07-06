// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const char of greetings) {
    // console.log(char);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "Franch")
map.set('IN', "India")

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    'game1': 'IGI',
    'game2': 'MFSMW',
    'game3': 'Call of Duty'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);  // TypeError: myObj is not iterable
// }