let myName = "Anjani    "

// console.log(myName.length)

// create a method which will return true length i.e., no of characters after removing space

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.akr = function() {
    console.log("akr available for all objects")
}

// heroPower.akr()
// myHeroes.akr()
myName.akr()

Array.prototype.akr2 = function() {
    console.log("only access to Array type")
}

myHeroes.akr2()
// heroPower.akr2() // will throw error

const User = {
    name: "AKR",
    email: "akr@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__: TeachingSupport // inheritance
}

Teacher.__proto__ = User

// The above is outdated
// mordern approach

console.log(TeachingSupport.makeVideo)
Object.setPrototypeOf(TeachingSupport, Teacher)

// TeachingSupport has access to Teacher

console.log(TeachingSupport.makeVideo)

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

myName.trueLength()