// for

// for (let index = 0; index < 10; index++) {
//     console.log(index+1);
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
//     }
// }

// let myArry = ["flash", "batman", "superman"]

// for (let i = 0; i < myArry.length; i++) {
//     console.log(myArry[i]);
// }

// for (let i = 1; i <= 20; i++) {
//     if(i === 5) {
//         console.log("Detected "+i);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if(i === 5) {
        console.log("Detected "+i);
        continue;
    }
    console.log(`value of i is ${i}`);
}