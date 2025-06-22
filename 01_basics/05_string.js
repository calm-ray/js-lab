const name = "Anjani"
const age = 25

// console.log("Name: "+ name + ", Age: "+age); // old syntax, avoid as much as u can

console.log(`Name: ${name}, Age: ${age}`) // mordern way, string interpolation

const gameName = new String("COD-BO-1") 

/** gameName is String Object with each character as key value pair i.e., 0: C, 1: O etc
 * It also has a length property, and other things like [[prototype]] - which contains methods which we can call on string to
 * modify it, and [[primitiveValue]] - which is nothing but the string itself
 */

console.log(gameName[0]);
console.log(gameName.__proto == String.prototype);

console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.at(1))
console.log(gameName.charAt(0))
console.log(gameName.indexOf('O'))

const str = "Hello World";

// Using substring()
console.log(str.substring(6, 0)); // "Hello " (arguments swapped internally)
console.log(str.substring(-5, 5)); // "Hello" (negative treated as 0)

// Using slice()
console.log(str.slice(6, 0));  // "" (start > end, returns empty string)
console.log(str.slice(-5));   // "World" (starts 5 characters from the end)
console.log(str.slice(-5, -2)); // "Wor" (from 5th last to 2nd last, exclusive)

const newString1 = "   anjkr ";
console.log(newString1);
console.log(newString1.trim()); // spaces gets removed

console.log('https://google.com/calm%20ray'.replace('%20', '-'))

console.log(gameName.split('-'))
