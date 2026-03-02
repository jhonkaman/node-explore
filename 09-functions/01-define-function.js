// Define Function

// Run: node 09-functions/01-define-function.js

// Learn how to define and call a function

function greet() {
  console.log("Hello!");
}

greet();

function sayName(name) {
  console.log("My name is " + name);
}

sayName("Alice");

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);
