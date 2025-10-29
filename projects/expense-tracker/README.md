# 💰 Expense Tracker

A simple and clean **Expense Tracker Web App** to manage personal finance by tracking income and expenses effectively. Built using **HTML, CSS, and Vanilla JavaScript** with persistent storage via **localStorage**.

---

## 🚀 Features

✅ Add Income & Expense transactions  
✅ Auto updates Total Balance, Total Income & Total Expense  
✅ Edit & Delete individual Transactions  
✅ Saves all data in browser using Local Storage  
✅ Modern GitHub-like UI (supports Dark Mode)  
✅ Clear transaction history view  
✅ Labels: **Credited** (Income) & **Debited** (Expense)  
✅ Smooth page load with auto data refresh  
✅ Empty state message when no data available  

---

## 🧠 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend UI | HTML, CSS |
| Logic | JavaScript |
| Storage | Local Storage (Browser) |

---

## 🏗️ Project Structure


```

/  
├── pages/
│ ├── form.html
│ ├── hist.html
├── index.html
├── style.css
├── script.js
└── github-like.min.css

```

---

## ⚙️ How It Works

- User enters **Amount** + selects **Income/Expense**
- Data gets stored in JavaScript array and synced to Local Storage
- Balance is calculated dynamically:
- 
Net Balance = Total Income – Total Expense
- UI updates instantly using DOM manipulation

---
## 📦 Local Storage Keys

| Key | Purpose |
|-----|---------|
| `records` | Stores all transaction entries |

Data format example:
```
[
{
  "amount": 1000,
  "type": "income"
}
]
```

----------

## 🔮 Future Enhancements

✔ Filter & Category support  
✔ Charts for spending trends  
✔ Cloud backup  
✔ Export data to CSV/PDF  
✔ Mobile UI improvements

----------

## 🧑‍💻 Developer

**Shiv**  
Learning & building projects to master JavaScript 🚀

----------

### ⭐ Show Support

If you find this project useful — consider giving it a **Star** ⭐ on GitHub!

----------

Made with ❤️ using HTML + CSS + JS
