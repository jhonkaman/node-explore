// Break Statement

// Run: node 08-loops/03-break.js

// Learn how to use break to exit a loop early

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("---");

let x = 0;

while (x < 100) {
  if (x === 3) {
    break;
  }
  console.log(x);
  x++;
}
