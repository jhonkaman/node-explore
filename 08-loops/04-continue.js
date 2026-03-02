// Continue Statement

// Run: node 08-loops/04-continue.js

// Learn how to use continue to skip to the next iteration

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("---");

let x = 0;

while (x < 5) {
  x++;
  if (x === 2) {
    continue;
  }
  console.log(x);
}
