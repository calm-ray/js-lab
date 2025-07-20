class User {
    constructor(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return this.username.toUpperCase()
    }
}

const userOne = new User("akr", "akr@gmail.com", "123")

console.log(userOne.encryptPassword());
console.log(userOne.changeUserName());

// behind the scene

// function User(username, email, password) {
//     this.username = username,
//     this.email = email,
//     this.password = password
// }

// User.prototype.encryptPassword = function() {
//     // ...
// }

// User.prototype.changeUserName = function() {
//     // ...
// }