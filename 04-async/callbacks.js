// 🗓️ Day 9 — Callbacks & Async Basics
// ----------------------------------------------

// Normal synchronous execution
console.log("Start");
console.log("Middle");
console.log("End");

// ----------------------------------------------
// Asynchronous example
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End (runs before timeout completes)");

// ----------------------------------------------
// Callback function
function greet(name, callback) {
  console.log("Hi, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Shivoham", sayBye);

// ----------------------------------------------
// Callback Hell Example
setTimeout(() => {
  console.log("Step 1 complete");
  setTimeout(() => {
    console.log("Step 2 complete");
    setTimeout(() => {
      console.log("Step 3 complete");
    }, 1000);
  }, 1000);
}, 1000);
