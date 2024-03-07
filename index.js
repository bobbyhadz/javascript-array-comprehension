// EXAMPLE 1 - Using an array comprehension with Array.map() in JavaScript

const arr = [1, 2, 3];

const newArr = arr.map(element => {
  return element + 10;
});

console.log(newArr); // 👉️ [ 11, 12, 13 ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using an array comprehension with Array.filter() in JavaScript

// const arr = [1, -1, 2, -2, 3, -3];

// const newArr = arr.filter(element => {
//   return element > 0;
// });

// console.log(newArr); // 👉️ [ 1, 2, 3 ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using an array comprehension with Array.forEach() in JavaScript

// const arr = [1, -1, 2, -2, 3, -3];

// const newArr = [];

// arr.forEach(element => {
//   if (element > 0) {
//     newArr.push(element);
//   }
// });

// console.log(newArr); // 👉️ [ 1, 2, 3 ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using an array comprehension with `for...of` in JavaScript

// const arr = [1, -1, 2, -2, 3, -3];

// const newArr = [];

// for (const element of arr) {
//   if (element > 0) {
//     newArr.push(element);
//   }
// }

// console.log(newArr); // 👉️ [ 1, 2, 3 ]
