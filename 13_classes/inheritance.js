class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username} is user's name`)
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }

    addCourse() {
        console.log("New course added by", this.username)
    }
}

const teacherOne = new Teacher("akr", "akr@gmail.com")
teacherOne.logMe();
teacherOne.addCourse();
console.log(teacherOne instanceof User);
