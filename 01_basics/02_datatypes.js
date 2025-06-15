"use strict"; // treat all js code as newer version

// alert(3 + 1) // We're using node js not browser

let name = "Anjani" // string
let age = 18 // number, range => 2^53
// bigint => for larger values than number
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
let isLoggedIn = false; // boolean

// In JS, null is standalone value and also type of data type, assigning it to variable basically means that u have assigned it, but for now its empty or there is an intentional absence of any object value
// undefined => variable has been declared but has not been defined
// symbol => a unique and immutable primitive value that can be used to create unique identifiers for objects, properties, or methods
// object => A standalone entity, with properties and type

console.log(typeof null) // object
console.log(typeof undefined); // undefined
console.log(typeof Object); // function

// Note there are special numeric values that belong to number i.e., +-Infinity and NaN
// Infinity => value greater than any number
// NaN => represents computational error i.e., dividing a string by a number

