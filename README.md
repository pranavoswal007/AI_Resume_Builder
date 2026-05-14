# 🚀 AI Resume Builder

A modern full-stack AI-powered Resume Builder built with React, Node.js, MongoDB, and Tailwind CSS. Create professional ATS-friendly resumes with customizable templates, AI-assisted resume generation, resume uploads, public sharing, and PDF export.

---

## ✨ Features

* 🎨 Modern dark UI with responsive design
* 🤖 AI-powered resume generation
* 📄 Upload existing resume (PDF)
* 🧠 Smart resume parsing
* 📥 Download resume as PDF
* 🌐 Public resume sharing
* 🔐 JWT Authentication
* 🖼️ Profile image upload
* 🎯 ATS-friendly resume templates
* 🎨 Template + accent color customization
* 📱 Fully responsive design

--- 

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Redux Toolkit
* React Router DOM
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication
* ImageKit
* OpenAI API

---

## 📂 Project Structure

```bash
Resume-Builder/
│
├── client/        # React frontend
├── server/        # Node.js backend
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/pranavoswal007/AI_Resume_Builder.git
cd AI_Resume_Builder
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd ../server
npm install
```

---

## 3️⃣ Environment Variables

### Server `.env`

Create a `.env` file inside the `server` folder:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
OPENAI_API_KEY=your_openai_api_key
OPENAI_BASE_URL=your_openai_base_url
OPENAI_MODEL=gemini-2.5-flash
```

### Client `.env`

Create a `.env` file inside the `client` folder:

```env
VITE_BASE_URL=http://localhost:3000
```

---

# ▶️ Run Locally

## Start Backend

```bash
cd server
npm run server
```

## Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🌍 Deployment

## Frontend Deployment

* Vercel

## Backend Deployment

* Render / Railway / VPS

---

# 🔒 Environment Security

Before pushing to GitHub, make sure `.env` files are hidden.

Create a `.gitignore` file:

```gitignore
node_modules
.env
client/.env
server/.env
dist
```
