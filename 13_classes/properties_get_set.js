function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })
}

const userOne = new User("akr@gmail.com", "Pass@123")

console.log(userOne.email)