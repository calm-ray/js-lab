// for of

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// for (const chars of "hello world") {
//     console.log(chars);
// }

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map);

// for(const key of map) {
//     console.log(key);
// }
// for(const [key, value] of map) {
//     console.log(key+": "+value);
// }

const obj = {
    'game1': 'nfs',
    'game2': 'ac1'
}

// for(const game of obj) {
//     console.log(game); // obj is not iterable
// } 

// for of loop won't work for objects. We have to use for in loop

for(const key in obj) {
    console.log(key+": "+obj[key]);
}

// for in can also be used for arrays
const arr = [1, 2, 3, 4, 5]
for(const i in arr) {
    console.log(i+": "+arr[i]);
}

// maps are not iterable hence for in can't be used
for(const key in map) {
    console.log(key);
}


/*** for each loop ***/
// arr.forEach( function (val) {
//     console.log(val);
// })
// arr.forEach( (item) => {console.log(item)})

// function printMe(item) {
//     console.log(item);
// }

// arr.forEach(printMe)

arr.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((obj) => {
    console.log(obj);
})