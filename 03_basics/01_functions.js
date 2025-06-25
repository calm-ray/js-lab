function sayMyName() {
    console.log('A');
    console.log('N');
    console.log('J');
    console.log('A');
    console.log('N');
    console.log('I');
}
sayMyName() // to execute function

function addTwoNumber(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumber(3, 4) // 7
addTwoNumber() // NaN
addTwoNumber(3, "4") // 34
addTwoNumber(3, "a") // 3a
addTwoNumber(3, null) // 3

function returnAddTwoNumbers(num1, num2) {
    return num1 + num2
    console.log("Hello"); // this unreachable code. Anything after return is unreachable.
}

console.log(returnAddTwoNumbers(8, 2))

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("anjani")) // anjani just logged in

console.log(loginUserMessage()) // sam just logged in after we assign a default value as sam