// Else If Statement

// Run: node 07-conditionals/03-else-if.js

// Learn how to use else if for multiple conditions

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

let age = 13;

if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teen");
} else if (age < 65) {
  console.log("Adult");
} else {
  console.log("Senior");
}
