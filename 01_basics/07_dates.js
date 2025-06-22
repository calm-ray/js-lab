const myDate = new Date();

console.log(myDate) // 2025-06-22T06:24:44.862Z
console.log(myDate.toString()) // Sun Jun 22 2025 06:25:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Sun Jun 22 2025
console.log(myDate.toLocaleString()) // 6/22/2025, 6:26:06 AM
console.log(myDate.toISOString()) // 2025-06-22T06:26:39.661Z
console.log(myDate.toJSON()) // 2025-06-22T06:27:55.222Z
console.log(myDate.toLocaleDateString()) // 6/22/2025
console.log(myDate.toLocaleTimeString()) // 6:27:55 AM
console.log(myDate.toTimeString()) // 06:27:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()) // Sun, 22 Jun 2025 06:27:55 GMT

console.log(typeof myDate);

let myCreateddt = new Date(2023, 0, 23)
console.log(myCreateddt.toDateString()) // Mon Jan 23 2023

// Remember months start with 0 in js where 0 -> Jan, 1-> Feb and so on

let myCreateddt1 = new Date('2023/01/14')
console.log(myCreateddt1.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// convert milliseconds to seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDate()); 
console.log(newDate.getMonth()); 
console.log(newDate.getDay()); 

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        timeZone: "Asia/Kolkata"
    })
);

