const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

const user = {
    name: "Anjani",
    loggedIn: true
}

Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "name"));

user.name = 'Ankur'
console.log(user);
