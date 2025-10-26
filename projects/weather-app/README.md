# 🌤️ Weather App

A sleek and minimal **Weather App** built with pure **HTML, CSS, and JavaScript** — inspired by the **GitHub Dark Theme**.  
It uses the [OpenWeather API](https://openweathermap.org/api) to fetch real-time weather data for any city or ZIP code.

**[Preview](https://shivoham-cs.github.io/JS-Journey/projects/weather-app/)**

---

## 🚀 Features

- 🔎 Search weather by **city name** or **ZIP code**
- 🌍 Supports input **with or without country code**
- ⚡ Uses **OpenWeather Geo API** for accurate coordinates
- 🔐 Secure API key entry — stored in memory, not exposed
- 💡 Clean, responsive, and modern UI (GitHub-style theme)
- 🧭 Example hint for easy input format
- 🛠️ Graceful error handling with user-friendly messages
- 🌙 Dark mode by default

---

## 🧰 Technologies Used

- **HTML5**
- **CSS3 (Flexbox + Variables)**
- **Vanilla JavaScript (ES6+)**
- **OpenWeather API**

---

## 🗝️ Setup Instructions

1. Clone or download this repository:
Here’s the **clean, comment-free version** of that script for all platforms 👇

    🪟 **Windows (PowerShell)**

    ```powershell
    git clone --no-checkout https://github.com/shivoham-cs/JS-Journey.git temp-repo
    cd temp-repo
    git sparse-checkout init --cone
    git sparse-checkout set projects/weather-app
    git checkout main
    Move-Item -Path "projects\weather-app" -Destination "..\weather-app"
    cd ..
    Remove-Item -Recurse -Force temp-repo
    ```

    🐧 **Linux / 🍎 macOS**

    ```bash
    git clone --no-checkout https://github.com/shivoham-cs/JS-Journey.git temp-repo
    cd temp-repo
    git sparse-checkout init --cone
    git sparse-checkout set projects/weather-app
    git checkout main
    mv projects/weather-app ../weather-app
    cd ..
    rm -rf temp-repo
    ```

2.  Open `index.html` in your browser — no server required!
    
3.  Click **“🔑 Set API Key”** and paste your [OpenWeather API key](https://home.openweathermap.org/api_keys).
    
4.  Enter a **city name** or **ZIP code** and click **Search**.
    
    Examples:
    
    ```
    Saharsa
    852127
    852129,IN
    800016,IN
    ```
    

----------

## ⚙️ API Notes

This app uses two OpenWeather endpoints:

-   **Geocoding API** → to convert city/ZIP to coordinates
    
    ```
    https://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid={API key}
    https://api.openweathermap.org/geo/1.0/zip?zip={zip},{country code}&appid={API key}
    
    ```
    
-   **Current Weather API** → to fetch temperature, condition, and wind
    
    ```
    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric
    
    ```
    

----------

## 🧠 Future Improvements

-   🌐 Auto-detect country using IP location
    
-   💾 Save API key in localStorage for persistence
    
-   📱 Add mobile PWA support
    
-   🎨 Add animated weather icons
    

----------

## 📜 License

**MIT License**  
© 2025 [Shivoham-CS](https://github.com/Shivoham-CS)

