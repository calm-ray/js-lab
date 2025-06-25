const user = {
    username: "anjani",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this); // this will print {}, as there is no global context here.
// If similar thing is logged in browser console, will be see Window as output, because that is set as global context

function one() {
    let username = "anjani"
    console.log(this); 
    console.log(this.username) // this is specific to object or classes can't use in function to access variables defined
}

one()

const anotherOne = () => {
    let username = "anjani"
    console.log(this); // {}, not same as in the regular function
}

anotherOne()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

const addTwo = (num1, num2) => (num1 + num2) // works only when there is one line in the function and i.e., nothing but the return statement itself
console.log(addTwo(4,5));

// wrap whatever your are returning in paranthesis
const returnObj = () => {username: "anjani"}
console.log(returnObj()); // undefined
const returnObjWithParanthesis = () => ({username: "anjani"})
console.log(returnObjWithParanthesis()); 