// Immediately Invoked Function Expression (IIFE)

// An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that runs as soon as it is defined. It is a common pattern used to create a private scope for variables, preventing them from polluting the global scope and avoiding naming conflicts. 

/**
 * Scope Isolation:
IIFEs create their own lexical scope, meaning variables and functions declared within the IIFE are not accessible from outside, thus preventing global scope pollution and potential naming collisions with other scripts or libraries.

Encapsulation:
They allow for the encapsulation of related code, promoting modularity and better organization of your JavaScript application.

Data Privacy:
By creating a private scope, IIFEs can be used to achieve data privacy by keeping certain variables and functions inaccessible from the outside, exposing only what is intended.

Immediate Execution:
The code within an IIFE executes immediately upon definition, which is useful for tasks that need to run once at script load time, like setting up initial configurations or populating data.
 */

(function executeNow() {
    console.log("Execute it now")
})();

((msg) => {
    console.log(msg)
})("this too is iife")

(function() {
  var privateVariable = "This is private";
  console.log(privateVariable); // "This is private"
})();

// console.log(privateVariable); // ReferenceError: privateVariable is not defined
