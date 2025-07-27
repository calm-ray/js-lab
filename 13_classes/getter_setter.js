class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    set password(password) {
        this._password = password
    }

    get password() {
        return this._password.toUpperCase()
    }
}

const akr = new User("akr@gmail.com", "Pass@123")
console.log(akr.password);
