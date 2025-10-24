// 🗓️ Day 10 — Promises
// ----------------------------------------------

// 1️⃣ Creating a Promise
const task = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("✅ Task completed successfully!");
  else reject("❌ Task failed!");
});

task
  .then(msg => console.log(msg))
  .catch(err => console.error(err))
  .finally(() => console.log("Promise ended."));

// ----------------------------------------------
// 2️⃣ Promise Chaining
const getData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Received:", data);
      resolve(`${data} processed`);
    }, 1000);
  });
};

getData("User Info")
  .then(res => getData("Posts"))
  .then(res => getData("Comments"))
  .then(() => console.log("All done!"));

// ----------------------------------------------
// 3️⃣ Promise.all Example
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3]).then(values => console.log("All values:", values));
