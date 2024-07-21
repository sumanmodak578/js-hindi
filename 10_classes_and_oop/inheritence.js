class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const hitesh = new Teacher('hitesh', 'hitesh@google.com', '123')
hitesh.addCourse()
hitesh.logMe()

const suman  = new User('suman');

// suman.addCourse() // this function is not available for user class
suman.logMe()

console.log(suman === hitesh);
console.log(suman === Teacher);
console.log(hitesh instanceof Teacher);
console.log(hitesh instanceof User);