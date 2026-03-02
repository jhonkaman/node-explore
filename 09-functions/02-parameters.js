// Parameters

// Run: node 09-functions/02-parameters.js

// Learn how to create functions with parameters

function multiply(a, b) {
  console.log(a * b);
}

multiply(4, 5);
multiply(10, 2);

function introduce(name, age) {
  console.log(`My name is ${name} and I am ${age} years old`);
}

introduce("Bob", 30);
introduce("Carol", 25);

function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(5, 10));
console.log(calculateArea(3, 7));
