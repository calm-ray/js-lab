function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.print = function() {
    console.log(`Price is: ${this.score}`)
}

// const chai = createUser("chai", 25)
// const tea = createUser("tea", 200)

// chai.print()

// The above code won't work nd print() will throw error
// Tough the properties print and increment got injected to createUser()
// but when u assingned function to a variable, u didn't tell variable that we have some extra properties
// To do so always use new keyword

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 200)

chai.print()

/**
 * The new keyword in JavaScript is used to create instances (objects) from constructor functions.
 * const user = new createUser("chai", 25);
 * 
 * JavaScript does these four steps:
 * 
 * Creates a new empty object → {}
 * Sets the prototype of the new object to the constructor’s .prototype
 * → gives access to shared methods (like .print() and .increment())
 * Calls the constructor function with this pointing to the new object
 * → sets properties like username and score
 * Returns the new object 
 * 
 * If you don’t use new, this won’t refer to a new object. The function may do nothing or even break your code.
 * function createUser(username, score) {
 *  this.username = username;
 *  this.score = score;
 * }
 * createUser.prototype.increment = function() {}
 *     this.score++
 * };
 * createUser.prototype.print = function() {
 *    console.log(`Score is: ${this.score}`)
 * };
 * 
 * const chai = new createUser("chai", 25);
 * chai.increment();
 * chai.print(); // Score is: 26
 * 
 * 🎯 Key Point:
 * The .prototype methods (increment, print) are shared by all objects created using new. This saves
 * memory.
 */
