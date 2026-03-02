// Return Values

// Run: node 09-functions/03-return-values.js

// Learn how to return values from functions

function double(x) {
  return x * 2;
}

let result = double(5);
console.log(result);

function getGreeting(name) {
  return "Hello, " + name + "!";
}

console.log(getGreeting("Diana"));
console.log(getGreeting("Eve"));

function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAge(20));
console.log(checkAge(15));
