let score = 33

console.log(typeof score) // number

score = "33"
let varInNum = Number(score)
console.log(typeof varInNum) // number
console.log(varInNum) // 33

score = "34avc"
varInNum = Number(score)
console.log(typeof varInNum) // number
console.log(varInNum) // NaN

score = null
varInNum = Number(score)
console.log(typeof varInNum) // number
console.log(varInNum) // 0

score = undefined
varInNum = Number(score)
console.log(typeof varInNum) // number
console.log(varInNum) // NaN

score = true
varInNum = Number(score)
console.log(typeof varInNum) // number
console.log(varInNum) // 1 

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolIsLoggedIn) // boolean
console.log(boolIsLoggedIn) // true 

isLoggedIn = ""
boolIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolIsLoggedIn) // boolean
console.log(boolIsLoggedIn) // false 

isLoggedIn = "akr"
boolIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolIsLoggedIn) // boolean
console.log(boolIsLoggedIn) // true

let num = 33
let stringNum = String(num)
console.log(typeof stringNum);
console.log(stringNum);

// *************************Operations*************************

num = 2
console.log(num + num);
console.log(num - num);
console.log(num * num);
console.log(num / num);
console.log(num ** 3);
console.log(num % 3);

console.log("2" + 1) // 21
console.log("1" + 2) // 12
console.log("2" + 1 + 2) // 212
console.log(2 + 1 + "3") // 33

console.log(+true); // 1
console.log(+""); // 0

