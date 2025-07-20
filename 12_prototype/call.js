function setUserName(username) {
    this.username = username
}

// function createUser(username, email, password) {
//     setUserName(username)
//     this.email = email,
//     this.password = password
// }

// setUserName is called as a regular function, so 'this' inside it does not refer to the current object created by 'new createUser'.
// As a result, 'username' is not set on the object. To fix this, we should explicitly bind 'this' using setUserName.call(this, username).

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email,
    this.password = password
}

const userOne = new createUser("akr", "akr@gmail.com", "Pass@123")

console.log(userOne);
