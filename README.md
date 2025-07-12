# Odoo-Hackathon

ReWear – Community Clothing Exchange

Overview: 
Develop ReWear, a web-based platform that enables users to exchange unused clothing 
through direct swaps or a point-based redemption system. The goal is to promote sustainable 
fashion and reduce textile waste by encouraging users to reuse wearable garments instead of 
discarding them.

Team Members :
1.Kahan Dave (Team Leader)
2.Shubham Solanki
3.Deep Sorathiya


# 👕 ReWear – Community Clothing Exchange

🌍 A web-based platform to **promote sustainable fashion** by enabling users to **swap or redeem unused clothing** instead of throwing them away. ReWear offers a seamless, eco-conscious alternative for wardrobe refreshment through direct swaps or a points-based system.

---

## 🚀 Features

### 👤 User Authentication
- 🔐 Secure **Email/Password Signup & Login**

### 🏠 Landing Page
- 📌 Brief platform introduction
- 🎯 **Calls-to-action**:  
  - “Start Swapping”  
  - “Browse Items”  
  - “List an Item”
- 🎠 **Featured Items Carousel**

### 📊 User Dashboard
- 👤 View **profile info and points balance**
- 📦 Overview of **uploaded items**
- 🔁 Track **ongoing and completed swaps**

### 👗 Item Detail Page
- 🖼️ **Image Gallery** and full description
- 👤 Uploader info
- 🔄 Options:  
  - “Swap Request”  
  - “Redeem via Points”
- 📌 Display item **availability status**

### ➕ Add New Item Page
- 📤 Upload images
- 📝 Enter details:  
  - Title  
  - Description  
  - Category  
  - Type  
  - Size  
  - Condition  
  - Tags
- ✅ Submit item for listing

### 🛡️ Admin Role
- 🧐 Approve/Reject item listings
- ❌ Remove inappropriate/spam content
- 📋 Lightweight admin panel for platform oversight

---

## 🛠️ Tech Stack

**Frontend**:
- ⚛️ React.js
- 🎨 TailwindCSS / CSS Modules
- 📦 Axios for API calls

**Backend**:
- 🖥️ Node.js with Express
- 🗄️ MongoDB (Mongoose ODM)
- 🔐 JWT for Auth

**Other Tools**:
- ☁️ Cloudinary or Firebase for Image Uploads
- 📨 Nodemailer for email notifications (optional)
- ⚙️ Redux or Context API (optional for state management)

---

## 📦 Folder Structure (Brief)

📁 rewear/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── utils/
│ │ └── App.jsx
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ └── server.js


🚀 Setup Backend
---

## ✅ How to Run Locally

### 🔧 Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- Git

### 📥 Clone the Repository
```bash
git clone https://github.com/your-username/rewear.git
cd rewear


cd backend
npm install
# Configure .env (see below)
npm start
💻 Setup Frontend
cd frontend
npm install
npm run dev


🔑 Environment Variables
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name

📸 Screenshots
📍 Add screenshots here (Landing Page, Item Detail Page, Dashboard, etc.)

🤝 Contributing
🍴 Fork this repo

👯 Clone your fork

📦 Create a new branch

✍️ Make your changes

🔁 Submit a pull request

📄 License
Licensed under the MIT License.
See LICENSE for more info.

🙌 Acknowledgements
🌱 Built to encourage sustainable fashion

💡 Inspired by circular economy models

💚 Special thanks to all contributors and testers

📬 Contact
Feel free to reach out:

✉️ email@example.com

🌐 LinkedIn

📁 GitHub: @your-username





---

### ✅ Next Step:
Let me know if you want this README customized with:
- Your **name, email, and GitHub handle**
- Actual **project screenshots**
- Dynamic badges (build status, license, etc.)

Also, I can help generate `CONTRIBUTING.md`, `LICENSE`, `.gitignore`, or setup deployment instructions (e.g., on Vercel/Netlify + Render/Railway).

Let’s make your repo ✨ polished and production-ready!
