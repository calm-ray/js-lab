/**
 * Based on how data is stored in the memory and how it is accessed, data is categorized into 2 parts:
 * 
 * 1. Primitive - Number, BigInt, Boolean, String, Null, Undefined, Symbol
 * 2. Non-Primitive/ Reference - Array, Objects, Functions
 * 
 * Primitive values are call by value i.e., whenever the variable is passed to a function, then a copy of variable will be shared to function parameter
 * Non-Primitive are call by references i.e., whenever the variable is passed to a function, then actual reference of that variable is shared to function parameter
 * 
 * JavaScript is a dynamic language, not static. This means that the type of a variable is determined at runtime, not during compilation
 */

const num = 100
const bigNumber = 114511458553612257232551254422n
const isLoggedIn = false
const str = '123'
const temp = null
let check;
const id = Symbol("23")
const id2 = Symbol("23")
console.log(id == id2); // false

// Reference data types
const heroes = ["abc","adc","aec"] // arrays

let myObj = {
    name: "Anjani",
    age: 2
}

const myFunction = function() {
    console.log("hello world")
}

/* ************************************************** */
// Stack (Primitive) & Heap (Non-Primitive)

let aString = "Anjani"
let bString = aString
bString = "Something else" 

console.log(aString);
console.log(bString);
// Above a copy of aString will be given to bString, changing bString doesn't affect aString 
// This is happening because the aboves are primitive and are stored in stack

let userOne = {
    email: "user1@gmail.com",
    upi: "user1upi@yesbank"
}

let userTwo = userOne

userTwo.upi = "user2upi@sbibank"

console.log(userOne);
console.log(userTwo);

// The above implementation will change the values in both userOne and userTwo as they are stored in heap and are non-primitive.
// The values are not copied, a reference of that variable is given.