const myArr = [0, 1, 2, 3, 4, 5, true, "anjani"] // js arrays are resizable

// JavaScript array-copy operations create shallow copies -- refrence is stored.

console.log(myArr[1]);

myArr.push(6)
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9) // adds value at “beginning”
console.log(myArr);
myArr.shift()
console.log(myArr);
console.log(myArr.indexOf(9)); // if exists returns index, else -1
console.log(myArr.join()); // joins using , by default

// slice vs splice
console.log("Before slice :: ", myArr);
console.log(myArr.slice(1,3));
console.log("After slice :: ", myArr);

console.log("Before splice :: ", myArr);
console.log(myArr.splice(1,3))
console.log("After splice :: ", myArr);

// Remember :: slice doesn't affect original array and returns the values in a new array with values from the indexes mentioned end index not inclusive, where as splice affects the original array and extracts the values from the indexes mentioned both inclusive