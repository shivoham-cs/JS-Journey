// 🗓️ Day 4 — JavaScript Loops
// 🧠 Loops let you run a block of code repeatedly until a condition is false.

// --------------------------------------
// 1️⃣ For Loop — the classic
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// --------------------------------------
// 2️⃣ While Loop
let count = 1;
while (count <= 5) {
  console.log("While Loop Count:", count);
  count++;
}

// --------------------------------------
// 3️⃣ Do...While Loop
// Executes the block at least once, even if condition is false
let n = 6;
do {
  console.log("Do-While Count:", n);
  n++;
} while (n <= 5); // will run once despite false condition

// --------------------------------------
// 4️⃣ Looping Over Arrays
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}:`, fruits[i]);
}

// --------------------------------------
// 5️⃣ For...Of Loop — iterate values directly
for (let fruit of fruits) {
  console.log("For...of:", fruit);
}

// --------------------------------------
// 6️⃣ For...In Loop — iterate keys (used for objects)
const user = { name: "Shivoham", age: 22, country: "India" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// --------------------------------------
// 7️⃣ Break Statement — stop the loop early
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Stopped at 6");
    break;
  }
  console.log(i);
}

// --------------------------------------
// 8️⃣ Continue Statement — skip an iteration
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // skip even numbers
  console.log("Odd number:", i);
}

// --------------------------------------
// 9️⃣ Nested Loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`Outer: ${i}, Inner: ${j}`);
  }
}

// --------------------------------------
// 🔟 Looping Over Strings
let word = "HELLO";
for (let char of word) {
  console.log(char);
}

// --------------------------------------
// 11️⃣ Infinite Loop (⚠️ Avoid!)
// while (true) {
//   console.log("Never-ending loop");
// }

// --------------------------------------
// 12️⃣ Loop with Arrays — Practical Example
const numbers = [1, 2, 3, 4, 5];
let total = 0;
for (let num of numbers) {
  total += num;
}
console.log("Total Sum:", total);

// --------------------------------------
// 13️⃣ Using Loops with Conditionals
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// --------------------------------------
// 14️⃣ Loop Best Practices
// ✅ Keep loops small & efficient
// ✅ Avoid deeply nested loops if possible
// ✅ Use 'break' & 'continue' wisely
// ✅ Prefer array methods (map, filter, forEach) for cleaner code

// --------------------------------------
// 🧩 Mini Challenges:
// 1. Print numbers from 1–50; skip multiples of 5.
console.log("Q1. Print numbers from 1–50; skip multiples of 5.")
let an = 1;
for (an = 1; an <= 50; an++) {
  if (an % 5 == 0) {
    continue;
  }
  console.log(an);
}
// 2. Sum all even numbers from 1–20.
console.log("Q2. Sum all even numbers from 1–20.")
let sumEven = 0;
let ev = 1;
for (ev = 1; ev <= 20; ev++) {
  if (ev % 2 != 0) {
    continue;
  }
  sumEven += ev;
}
console.log(sumEven);
// 3. Create a multiplication table (1–10).
console.log("Q3. Create a multiplication table (1–10).")
for (let tbr = 1; tbr <= 10; tbr++) {
  for (let tbc = 1; tbc <= 10; tbc++) {
    console.log(`${tbr} × ${tbc} = ${tbr * tbc}`);
  }
  console.log("------------");
}
// 4. Loop through an object and print key-value pairs.
console.log("Students and their favourite subjects-")
let students = {
  Raman : "Maths",
  Sohan : "Science",
  Mohan : "Economics"
}

for (let student in students) {
  console.log(`${student} : ${students[student]}`)
}
// 5. Use nested loops to print a simple pattern like:
console.log("Star Print-")
for (let sr = 1; sr <= 5; sr++){
  let row = "";
  for (let sro = 1; sro <= sr; sro++) {
    row += "* "
  }
  console.log(row)
}
//
// *
// * *
// * * *
// * * * *
// * * * * *
