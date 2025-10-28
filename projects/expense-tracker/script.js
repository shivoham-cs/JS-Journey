const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌗 Theme";
toggleBtn.className = "gh-btn";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.dataset.theme = savedTheme;
toggleBtn.onclick = () => {
    const t = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = t;
    localStorage.setItem("theme", t);
};

// -----------------