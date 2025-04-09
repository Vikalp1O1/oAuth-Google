# 🚀 Google OAuth Authentication App

This project is a Node.js application that allows users to log in using their **Google Account**.  
It uses **Passport.js** with the **Google OAuth 2.0 strategy** for authentication, and **JWT** (JSON Web Tokens) for session management.

---

## 📁 Features

- 🌐 Google Sign-In Authentication
- 🔐 JWT Token Generation
- 🛡️ Secure API Routes
- ⚡ Lightweight and Fast
- 📦 Organized Codebase (Config, Models, Routes)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Passport.js
- passport-google-oauth20
- JSON Web Token (jsonwebtoken)
- MongoDB (Mongoose)

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vikalp1O1/oAuth-Google.git
   cd oAuth-Google

## File Structure
   .
├── config/
│   └── passport.js         # Passport Google OAuth setup
├── models/
│   └── User.js             # User Mongoose model
├── routes/
│   └── auth.js             # Authentication routes
├── .env                    # Environment variables
├── .gitignore              # Ignored files and folders
├── package.json            # Project metadata and dependencies
├── server.js               # Main server file
