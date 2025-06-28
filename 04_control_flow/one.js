let temp = 41
if(temp < 50) {
    console.log("temp less than 50");
} else {
    console.log("temp greater than or equal to 50");
} 

console.log("This will always run")

const score = 200

if(score > 100) {
    let power = 'fly'
    var anotherPower = 'run fast'
    console.log("User can now "+power);
    console.log("User can also "+anotherPower);
}

// console.log(power); // will not able to access it outside if
// console.log(anotherPower); // can access it outside if. Hence try avoiding using var in your code due to its scope issues

const balance = 999

balance >= 1000 ? console.log("No issues") : console.log("Balance should be greater than 1000");

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}
