let user = {
    email: "akr@gmail.com",
    fullName: {
        userName: {
            firstName: "Anjani",
            lastName: "Ray"
        }
    }
}

console.log(user.fullName.userName.firstName);

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "b"}

let obj3 = {obj1, obj2} // object inside object, will not merge
console.log(obj3); 
let obj4 = {...obj1, ...obj2}
console.log(obj4); // will merge it, same procedure as arrays
let obj5 = Object.assign({}, obj1, obj2)
console.log(obj5);

// Arrays of object
let users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
]

console.log(users[0].email) // this is how u access. Can use maps or for loops to iterate through it

console.log(Object.keys(obj1)) // returns array with all keys in object
console.log(Object.values(obj1)); // returns array with all values in object
console.log(Object.entries(obj1)); // returns array or array with key at 0th position and value at 1st position;  [ '1', 'a' ], [ '2', 'b' ] ]

console.log(obj1.hasOwnProperty('1'))

/***** De-Structuring *****/

const course = {
    courseName: "DSA",
    price: 999,
    courseInstructor: "Someone"
}

const {courseName, price, courseInstructor: instructor} = course

console.log(course.courseName)
console.log(courseName);

console.log(course.courseInstructor)
console.log(instructor);