const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach((item) => {
//     console.log(item);
// })

// console.log(values);

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (num) => num > 4)

// const newNums = nums.filter((num) => {
//     return num > 4
// })

// const newNums = []
// nums.forEach((num) => {
//     if(num > 4)
//         newNums.push(num)
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((book) => {
//   return book.genre === 'History'
// })

const userBooks = books.filter((book) => book.publish >= 1995 && book.genre === 'History')


console.log(userBooks);

/*** map function ***/
// const myNums = [1,2,3,4,5,6,7,8,9,10]
const myNums = [1,2,3]
const newNums = myNums.map((num) => num+10)
console.log(newNums);

const newNums2 = myNums
                  .map((num) => num * 10)
                  .map((num) => num+1)
                  .filter((num) => num >= 40)
console.log(newNums2);

/*** reduce function ***/
const initialValue = 0
// const total = myNums.reduce( function (accumulator, currentValue) {
//   console.log(`accumulator: ${accumulator} && currentValue: ${currentValue}`);
//   return accumulator + currentValue
// }, initialValue)

const total = myNums.reduce( (accumulator, currentValue) => accumulator+currentValue, initialValue)
console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "python course",
    price: 599
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);
