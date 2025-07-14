// const promiseOne = new Promise(
//     function(resolve, reject) {
//         // Do an async task
//         // DB calls, cryptography, network calls
//         setTimeout(function(){
//             console.log('async task is complete')
//             resolve()
//         }, 1000)
//     }
// )

// promiseOne.then(function() {
//     console.log("Promise consumed")
// })

// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("async task 2")
//         resolve()
//     }, 1000)
// }).then(function() {
//     console.log("Promise 2 cosumed")
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             username: 'akr',
//             email: 'akr@gmail.com'
//         })
//     }, 1000)
// })

// promiseThree.then((data) => {
//     console.log(data)
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error) {
//             resolve({username: 'akr', email: 'akr@gmail.com'})
//         } else {
//             reject({error: 'something went wrong'})
//         }
//     }, 2000)
// })

// promiseFour.then((data) => {
//     console.log(data)
//     return data.username
// }).then((username) => {
//     console.log(username)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => console.log('The promise is either resolved or rejected'))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({msg: "db connected"})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log('error')
    }
}

consumePromiseFive()

async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})