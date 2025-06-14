[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19763690&assignment_repo_type=AssignmentRepo)

# 🛠️ Express Products API

This project is a RESTful API built with Express.js for managing a list of products. It supports full CRUD operations, authentication via an API key, custom middleware, error handling, and advanced features like filtering, pagination, and search.

---

## 📦 Requirements

- Node.js v18 or higher
- npm
- Postman (or any API testing tool)

---

## 🚀 How to Run the Server

1. Clone the repository:
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Wangarijane.git

2. Navigate into the project folder:
   
   cd week-2-express-js-assignment-Wangarijane

3. Install dependencies:
   
   npm install

4. Create a .env file in the root directory and add:
   
   API_KEY=supersecret123

5. Start the server:
   
   npm start

6. Visit in browser or use Postman:
   
   http://localhost:3000

## 📌 API Endpoints
⚠️ All routes require the header:


x-api-key: supersecret123

## GET /api/products

Description: Get all products.

Query Parameters:

category - filter by category

search - search by product name

page and limit - pagination

Example:

GET /api/products?category=electronics&search=lap&page=1&limit=2

Sample Response:

[
  {
    "id": "1",
    "name": "Laptop",
    "description": "Fast laptop",
    "price": 1000,
    "category": "electronics",
    "inStock": true
  }
]

## GET /api/products/:id

Description: Get a specific product by ID.

## POST /api/products

Description: Create a new product.

Request Body Example:

{
  "name": "Keyboard",
  "description": "Mechanical keyboard",
  "price": 70,
  "category": "electronics",
  "inStock": true
}

## PUT /api/products/:id

Description: Update an existing product.

Request Body: Same structure as POST.

## DELETE /api/products/:id

Description: Delete a product by ID.

## 🔐 Authentication

All endpoints require an API key header:

x-api-key: supersecret123

## 📁 Folder Structure

project-root/
│
├── routes/
│   └── products.js
│
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   └── validateProduct.js
│
├── .env
├── .env.example
├── README.md
└── server.js

🧪 Testing with Postman
Set the following header for all requests:
x-api-key: supersecret123
You can test all routes using Postman or Insomnia.

🔧 Environment Variables
Create a .env file and define:
API_KEY=supersecret123
Also include a .env.example file for reference:
API_KEY=your_api_key_here

✅ Project Complete
This completes the Express.js API assignment with:

CRUD endpoints ✅

Middleware ✅

Error handling ✅

Advanced features ✅   
