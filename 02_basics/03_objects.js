// Singelton - Use Object.create()

// object literals

const mySym = Symbol("key1")

let user = {
    name: "Anjani",
    "full name": "Anjani Kumar Ray",
    [mySym]: "Symbol-Value", // use [] for Symbols, mySym will be treated as string not symbol
    email: "akr@gmail.com",
    age: 25,
    isLoggedIn: false,
    location: "Kolkata",
    lastLoggedInDays: ["Mon", "Sat", "Sun"]
}

console.log(user.name);
// console.log(user.full name); // if a key has a space its better to use: var["key 1"]
console.log(user["full name"]);
console.log(user[mySym]); // Keys that are created using Symbol, must be fetched like this
console.log(user.age);

user.email = "akr1@gmail.com"
console.log(user.email);

// Object.freeze(user);
// user.email = "akr2@gmail.com"
// console.log(user);

user.greeting = function () {
    console.log("Hello JS user");
}

console.log(user.greeting) // will return reference of the function [Function (anonymous)]
console.log(user.greeting()) // Hello JS user

user.greeting2 = function() {
    console.log(`Hello JS user : ${this["full name"]}`);
}
console.log(user.greeting2())

