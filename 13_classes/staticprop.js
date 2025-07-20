class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username} is user's name`)
    }

    createId() {
        return `123`
    }
}

const userOne = new User(`Anjani`)
console.log(userOne.createId());

// But what if for some particular reason we don't want instances to have a access to createId. For such cases use static
// static methods belong to class itself and not to instances of the class
// Generally used for utility/ helper functions, factory methods, to maintain Global or Class-Level Data

class UserNew {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username} is user's name`)
    }

    static createId() {
        return `123`
    }
}

const userTwo = new UserNew(`Anjani`)
console.log(UserNew.createId());
