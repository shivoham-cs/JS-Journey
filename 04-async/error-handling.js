// 🗓️ Day 12 — Error Handling same as async await
// ----------------------------------------------

async function fetchUsers() {
  try {
    console.log("Loading users...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("Fetched users:", users);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Fetch attempt finished.");
  }
}

fetchUsers();
