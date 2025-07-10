# 📊 Spreadsheet Dashboard

A **pixel-perfect**, spreadsheet-style web app built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**. The interface mimics the look and feel of tools like **Google Sheets**, featuring interactive toolbars, tabs, action buttons, and a scrollable data grid — all implemented from a Figma design.

---

## ✨ Features

- 🧩 Spreadsheet layout (1440×1024) with precise Figma matching
- 🎨 Fully responsive with Dark Mode support
- 📂 Toolbar with actions: Hide, Sort, Filter, View
- 📤 Import, Export, Share, and New Action buttons
- 🗂 Footer tabs: All Orders, Pending, Reviewed, Arrived
- 🔍 Search bar with live input log
- 🔔 Notification icon with badge
- 👤 Profile dropdown with truncation and ellipsis
- 🔄 Theme toggle (light/dark)
- 📈 Scrollable table section with grouped and individual columns
- ✅ All UI elements are interactive (log to console)

---

## 🛠️ Tech Stack

- **React 18 + TypeScript**
- **Vite** – blazing-fast dev/build tool
- **Tailwind CSS** – utility-first styling
- **Lucide React / SVG Icons**
- **Figma** – pixel spec reference

---

## 📁 Project Structure

├── public/
├── src/
│ ├── assets/ # All SVG icons and images
│ ├── components/ # Header, Toolbar, Table, Footer
│ ├── data/ # Separate files for static data (e.g. priority.ts, dueDate.ts)
│ ├── App.tsx # Main layout with fixed header/footer/toolbar
│ ├── main.tsx # ReactDOM entry point
│ └── index.css # Tailwind and base styles
├── tailwind.config.js # Custom theme + color config
├── tsconfig.json # TypeScript configuration
└── vite.config.ts # Vite config

## 🚀 Getting Started

### 1. Clone the Repository
<pre>bash
git clone https://github.com/Yashikagarg211/react-spreadsheet-ui.git
cd react-spreadsheet-ui
</pre>

2. Install Dependencies
<pre>npm install</pre>

3. Run the Development Server
<pre>npm run dev</pre>
Open http://localhost:5173 to view the app.

🌐 Deployment
This app is deployed using Vercel.
➤ Live Site: https://your-project-name.vercel.app

To deploy yourself:
Push the project to GitHub
Go to vercel.com, sign in with GitHub
Import your repo, choose Vite preset
Deploy — Vercel will auto-build and host it

🙋‍♀️ Author
Yashika Garg
Frontend Developer — Passionate about clean UIs and pixel-perfect implementation



