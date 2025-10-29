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

const tHist = document.getElementById("tHist");
const tForm = document.getElementById("tForm");
const records = JSON.parse(localStorage.getItem("records")) || [];

if (tForm) {
    tForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const amount = document.getElementById("amount").value;
        const type = document.getElementById("type").value;
        const date = document.getElementById("date").value;
        const note = document.getElementById("note").value;
        const serMSG = document.getElementById("ser-msg");
        serMSG.style.textAlign = "center";
        serMSG.style.fontWeight = "bold";

        if (!amount || !date || !note) {
            serMSG.style.display = "flex"
            serMSG.style.backgroundColor = "var(--danger)"
            serMSG.innerHTML = `
                <span class="erMSG">Please fill all fields.</span>
            `
            setTimeout(() => {
                serMSG.style.display = "none"
            }, 2000);

            return;
        }

        if (!Number.isInteger(Number(amount))) {
            serMSG.style.display = "flex"
            serMSG.style.backgroundColor = "var(--warn)"
            serMSG.innerHTML = `
                <span class="wrMSG">Amount must be a whole number (integer)!</span>
            `
            return;
        }

        if (Number(amount) <= 0) {
            serMSG.style.display = "flex"
            serMSG.style.backgroundColor = "var(--warn)"
            serMSG.innerHTML = `
                <span class="wrMSG">Amount must be greater than 0!</span>
            `
            return;
        }

        records.push({ amount, type, date, note });
        localStorage.setItem("records", JSON.stringify(records));
        serMSG.style.display = "flex"
        serMSG.style.backgroundColor = "var(--accent)";
        serMSG.innerHTML = `
            <span class="ssMSG">Records added successfully.</span>
        `;

        setTimeout(() => {
            serMSG.style.display = "none"
        }, 2000);

        tForm.reset();
    });
}

if (tHist) {
    function loadTData() {
        const records = JSON.parse(localStorage.getItem("records")) || [];
        tHist.innerHTML = "";

        if (records.length === 0) {
            tHist.innerHTML = `
                <div class="repo-card" style="text-align:center; padding:20px; opacity:0.7;">
                    No transactions yet 🚀<br>
                    Add your first income or expense!
                </div>
            `;
            return;
        }

        records.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "dataCard repo-card";
            const label = item.type === "expense" ? "Debited" : "Credited";
            div.innerHTML = `
                <h3>${item.type.toUpperCase()}</h3>
                <div class="axCol">
                    <span class="badge">${label}: ₹ ${item.amount}</span>
                    <span class="dated">${item.date}</span>
                </div>
                <div class="otOP">
                    <span class="dscp">${item.note}</span>
                    <button class="gh-btn" onclick="deleteRecord(${index})">Delete</button>
                </div>
            `;
            tHist.appendChild(div);
        });
    }

    loadTData();
}


function deleteRecord(index) {
    records.splice(index, 1);
    localStorage.setItem("records", JSON.stringify(records));
    loadTData();
}

let totalIncome = 0;
let totalExpense = 0;

records.forEach(item => {
    if (item.type === "income") {
        totalIncome += Number(item.amount);
    }
    if (item.type === "expense") {
        totalExpense += Number(item.amount);
    }
});

const balance = totalIncome - totalExpense;

document.getElementById("totalIncome").innerHTML = `₹ ${totalIncome}`;
document.getElementById("totalExpense").innerHTML = `₹ ${totalExpense}`;
document.getElementById("totalBalance").innerHTML = `₹ ${balance}`;