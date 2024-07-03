// Singleton Object
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Asish"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email: "same@gmail.com",
    fullname: {
        userfullname:
{
    firstname: "suman",
    lastname: "modak"
}    }
}

// console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // Syntax -> Object.assign(target, sources)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 2,
        email: "s@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

//  API's Format (JSON)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]