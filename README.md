# 🛠 Blog App – Backend (Node.js + Express + MongoDB)

## 🚀 Overview

This is the backend of a full-stack MERN Blog Application.
It provides RESTful APIs for managing blog posts using **Node.js, Express, and MongoDB**.

## ✨ Features

* 📄 Get all blog posts
* ➕ Create a new post
* 🗑 Delete a post
* 🔍 Get single post by ID
* ⚠️ Backend validation for required fields
* 🔗 Connected with MongoDB for persistent storage
* 🌐 REST API architecture

## 🧑‍💻 Tech Stack

* 🟢 Node.js
* ⚡ Express.js
* 🍃 MongoDB
* 🧩 Mongoose
* 🌐 CORS

## 📁 Project Structure

```id="backendstruct"
backend/
├── models/
│   └── Post.js
├── routes/
│   └── blogRoutes.js
├── config/
│   └── db.js
├── server.js
└── package.json
```

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash id="clonebackend"
git clone https://github.com/your-username/blog-backend.git
cd blog-backend
```

### 2️⃣ Install dependencies

```bash id="installbackend"
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```env id="envbackend"
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run the server

```bash id="runbackend"
node server.js
```

Or (recommended):

```bash id="runbackend2"
npx nodemon server.js
```

## 🔗 API Endpoints

### 📄 Get all posts

```http id="getposts"
GET /posts
```

### ➕ Create a post

```http id="createpost"
POST /posts
```

Body:

```json id="createbody"
{
  "title": "Post Title",
  "content": "Post Content"
}
```

### 🔍 Get single post

```http id="getsingle"
GET /posts/:id
```

### 🗑 Delete a post

```http id="deletepost"
DELETE /posts/:id
```

## ⚠️ Validation

* Title and content are required
* Empty submissions are rejected with proper error response

## 🧠 Key Concepts Implemented

* REST API design
* Express routing
* MongoDB CRUD operations
* Middleware usage
* Error handling
* JSON request handling

## 🌍 Deployment

* Backend can be deployed on **Render**
* Make sure to update CORS settings for frontend domain

## 📌 Notes

* Uses `express.json()` for parsing request body
* CORS enabled for frontend communication
* MongoDB stores blog data persistently

## 🚀 Future Improvements

* 🔐 Authentication (JWT)
* ✏️ Update/Edit post
* 🖼 Image upload (Cloudinary)
* 🧾 Pagination
