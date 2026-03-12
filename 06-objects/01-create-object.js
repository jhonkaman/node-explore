// Create Objects

// Run: node 06-objects/01-create-object.js

// Learn how to create and initialize objects to store key-value pairs

let person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person);

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2021
};
console.log(car);

let mixed = {
  name: "Alice",
  age: 25,
  isStudent: true,
  gpa: 3.8
};
console.log(mixed);

// Object keys and values
console.log(Object.keys(person));
console.log(Object.values(person));
