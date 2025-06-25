var c = 300

if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) // error
// console.log(b) // error
console.log(c); // 30

// Remeber: scopes in browser console are different from scopes defined in node developement environment 

function one() {
    const username = "anjani"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

addOne(5) // this won't throw error ... this is something known as hoisting in js
function addOne(num) {
    return num+1
}

addTwo(5) // this will throw error:: ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num+2
}