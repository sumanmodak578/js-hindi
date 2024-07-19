let myName = 'suman     '
letmyDrink = 'chai    '

// console.log(myName.truelength);

let myHeroes = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.suman = function(){
    console.log(`suman is present in all objects`);
}

Array.prototype.heySuman = function(){
    console.log(`Suman says Hello!!!`);
}

// heroPower.suman()
// myHeroes.suman()
// myHeroes.heySuman()
// heroPower.heySuman()

// Inhetitence

const user = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode     '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}}`);
}

anotherUsername.trueLength()
'suman   '.trueLength()
'   iceTea      '.trueLength()

