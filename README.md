# 🛣️ Highway DeLite Travel Booking App

A full-stack MERN application where users can explore curated travel experiences, view available slots, and complete bookings.  
This project replicates the UI shown in the provided screenshots and demonstrates a complete frontend–backend integration workflow.

---

## 🚀 Tech Stack

**Frontend**
- React + TypeScript (Vite)
- TailwindCSS
- Axios (for API calls)
- React Router (for navigation)

**Backend**
- Node.js + Express
- MongoDB (local)
- Mongoose (ODM)
- dotenv (for environment variables)
- CORS, body-parser, etc.

---

## 📁 Project Structure

travel-app/
│
├── backend/
│ ├── src/
│ │ ├── models/ # MongoDB Schemas
│ │ ├── routes/ # Express routes (experiences, bookings, promo)
│ │ ├── controllers/ # Business logic
│ │ ├── config/ # MongoDB connection setup
│ │ ├── seed.js # Initial experience data seeding
│ │ └── server.js # Express app entry point
│ ├── .env.example
│ ├── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/ # Home, Details, Checkout, Result
│ │ ├── components/ # Reusable UI components
│ │ ├── api/ # Axios API functions
│ │ └── main.tsx
│ ├── vite.config.ts
│ ├── tailwind.config.js
│ ├── package.json
│
├── setup.bat # One-click setup script for Windows
└── README.md



---

## ⚙️ Setup Instructions

### 1. Prerequisites

Make sure you have installed:
- **Node.js** (v18 or newer)
- **npm** (comes with Node)
- **MongoDB** (running locally on default port `27017`)

To check:
```bash
node -v
npm -v
mongod --version
