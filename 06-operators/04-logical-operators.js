// Logical Operators

// Run: node 06-operators/04-logical-operators.js

// Learn how to use logical operators: &&, ||, !

let isAdult = true;
let hasLicense = true;

// AND operator (both must be true)
console.log(isAdult && hasLicense);
console.log(isAdult && false);

// OR operator (at least one must be true)
console.log(isAdult || hasLicense);
console.log(false || false);

// NOT operator (inverts the value)
console.log(!isAdult);
console.log(!false);

// Complex expression
let age = 25;
let hasJob = true;
console.log(age >= 18 && hasJob);
