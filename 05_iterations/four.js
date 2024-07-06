// for in loop

const myObj = {
    js: 'JavaScript',
    ccp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple',
    py: 'Python'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]} programming language`);
}

const programming = ['js', 'ruby', 'swift', 'py', 'java']

for (const key in programming) {
    // console.log(programming[key]);   
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "Franch")
map.set('IN', "India")

for (const key in map) {
    // console.log(key); 
}