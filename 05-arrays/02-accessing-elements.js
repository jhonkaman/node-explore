// Accessing Elements

// Run: node 05-arrays/02-accessing-elements.js

// Learn how to access individual elements in an array using indexes

let fruits = ["apple", "banana", "orange", "grape"];

// Access elements by index (0-based)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// Last element
console.log(fruits[fruits.length - 1]);

// Change an element
fruits[1] = "mango";
console.log(fruits);
