const score = 400
console.log(score) // 400

const balance = new Number(1000)
console.log(balance) // [Number: 1000]

console.log(balance.toFixed(2)) // 1000.00

const num = 23.86690
console.log(num.toPrecision(3));

const num2 = 100000000
console.log(num2.toLocaleString('en-IN'));

/************************ MATHS ************************/
console.log(Math);

console.log(Math.abs(-4000))

console.log(Math.round(4.7)); // 5

console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9)) // 4

console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
