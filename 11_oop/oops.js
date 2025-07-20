// const user = {
//     username: "anjani",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function() {
//         console.log("Details from db")
//         console.log(`${this.username}`)
//         console.log(this)
//     }
// }

// console.log(user.getUserDetails())
// console.log(`Global context:`, this)

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = () => {
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = User("Anjani", 12, true)
const userTwo = User("AKR", 11, false)
// console.log(userOne);

// The above will override userOne value. SO its mandatory to use new keyword

const userThree = new User("Ankur", 10, true)
console.log(userThree.greeting())
console.log(userThree.constructor)

// When use new -> new empty object gets created
// a constructor function is called 
// constructor function packs all the arguments in this object