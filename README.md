# 🎨 Personal Task Manager - Frontend

This is the frontend client for the **Personal Task Manager** web application.  
It is built with **React.js**, **Tailwind CSS**, and **Vite**, and communicates with a backend server for user authentication and task management.

---

## 🚀 Features

- ⚡ User Registration and Login (with JWT)
- 📝 Create, View, and Delete Tasks
- 🧠 View Profile (number of tasks, delete account option)
- 🎨 Modern, responsive design with Tailwind CSS
- 🎞️ Smooth animations using Framer Motion
- 🔔 Toast notifications for feedback
- 🌐 Fully deployed using **Vercel**

---

## 📦 Tech Stack

- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Axios](https://axios-http.com/)
- [Vercel](https://vercel.com/) (deployment)

---

## 📚 Pages Overview

| Route         | Page Description                          |
|---------------|-------------------------------------------|
| `/`           | Login Page                                |
| `/register`   | Register New Account Page                 |
| `/dashboard`  | User Dashboard (view/create tasks)        |
| `/profile`    | Profile Page (view stats, delete account) |

---

## 🛠️ Setup and Installation

Follow these steps to run the frontend locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/personal-task-manager-frontend.git

# 2. Navigate into the project directory
cd personal-task-manager-frontend

# 3. Install the dependencies
npm install

# 4. Create a `.env` file in the project root with the following:
VITE_API_URL=https://your-backend-railway-url/api

# Example:
# VITE_API_URL=https://personal-task-manager-production.up.railway.app/api

# 5. Start the development server
npm run dev
```

Frontend will be running at:  
**http://localhost:3000**

---

## 🌍 Deployment Instructions (Vercel)

- Deploy directly from GitHub using Vercel.
- Set your environment variable in Vercel:
  - `VITE_API_URL=https://your-backend-railway-url/api`
- Vercel will automatically handle builds and deployment after Git pushes.

---

## 📌 Best Practices Used

- Protected API requests using Axios interceptors
- Modular and clean folder structure
- Environment variables securely managed
- Mobile-first responsive design
- Reusable animated components

---

# 🔥 Quick Tips

- Always **REDEPLOY** Vercel if you change the `.env` variables.
- Never commit your `.env` file to GitHub (always add `.env` to `.gitignore`).
- Always check that your `VITE_API_URL` points correctly to your deployed backend.
