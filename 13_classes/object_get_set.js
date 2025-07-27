const User = {
    _email: 'ak@gmail.org',
    _password: "abc",

    set email(value) {
        this.email = value
    },

    get email() {
        return this._email.toUpperCase()
    }
}

const userOne = Object.create(User)
console.log(userOne.email);
