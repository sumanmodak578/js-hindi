class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const suman = new User('suman');
// console.log(suman.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const hitesh = new Teacher('hitesh', 'hitesh@gmail.com');
hitesh.logMe();
console.log(hitesh.createId());