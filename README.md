# product-catalog-api
 A RESTful API for a product catalog system that could power an e-commerce platform. # Product Catalog API

## Overview
A RESTful API for managing product listings in an e-commerce platform. This API allows users to create, update, delete, and fetch product details. Built using **Node.js, Express.js, and MongoDB**.

## Features
- CRUD operations for products (Create, Read, Update, Delete)
- RESTful API design
- Error handling (400 & 500 responses)
- MongoDB integration for persistent storage
- Basic validation for required fields

---

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed or an online MongoDB Atlas instance

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Cecilia-Banda/product-catalog-api.git
   cd product-catalog-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure your MongoDB connection:
   ```sh
   MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/product-catalog
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

---

## API Endpoints

### **Products**
| Method | Endpoint               | Description             |
|--------|------------------------|-------------------------|
| GET    | `/api/products`        | Fetch all products      |
| GET    | `/api/products/:id`    | Fetch product by ID     |
| POST   | `/api/products`        | Add a new product       |
| PUT    | `/api/products/:id`    | Update a product        |
| DELETE | `/api/products/:id`    | Delete a product        |

---

## Request & Response Examples

### **Create a Product**
#### **Request:**
```json
POST /api/products
{
  "name": "Laptop",
  "price": 1200,
  "category": "Electronics"
}
```
#### **Response:**
```json
{
  "message": "Product created successfully",
  "product": {
    "_id": "123456789",
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics"
  }
}
```

### **Error Handling Examples**
#### **400 Bad Request (Missing Fields)**
```json
{
  "error": "Product name and price are required"
}
```

#### **500 Server Error**
```json
{
  "error": "Internal Server Error"
}
```

---

## Additional Enhancements
- **Authentication & Authorization (JWT)** for secure product management
- **Search & Filtering**: `/api/products?category=electronics&price_max=500`
- **Image Uploads** with `multer`
- **Rate Limiting** to prevent abuse

---

## Author
Developed by **Cecilia Banda** ✨

---

## License
MIT License


