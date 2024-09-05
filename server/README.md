# Backend Server Documentation

## Overview

This backend server is built using Express and MongoDB as part of the MERN stack. It provides RESTful APIs to manage malls, stores, and products, with role-based access control for users. The server supports authentication, role-based authorization, and detailed logging.

## Table of Contents

- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Database Connection](#database-connection)
- [Middleware](#middleware)
  - [Logger Middleware](#logger-middleware)
  - [Error Handling Middleware](#error-handling-middleware)
- [Models](#models)
  - [Mall Model](#mall-model)
  - [Store Model](#store-model)
  - [Product Model](#product-model)
- [Controllers](#controllers)
  - [Authentication Controller](#authentication-controller)
  - [Mall Controller](#mall-controller)
  - [Store Controller](#store-controller)
  - [Product Controller](#product-controller)
- [Routes](#routes)
  - [Authentication Routes](#authentication-routes)
  - [Mall Routes](#mall-routes)
  - [Store Routes](#store-routes)
  - [Product Routes](#product-routes)
- [Middleware Utilities](#middleware-utilities)
  - [Authentication Middleware](#authentication-middleware)
  - [Role Middleware](#role-middleware)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Deployment](#deployment)
- [Starting the Server](#starting-the-server)
- [Contributing](#contributing)
- [License](#license)

## Setup

Follow these steps to set up the backend server:

1. **Clone the Repository:**

    ```bash
    git clone <repository_url>
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd <project_directory>
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` File:**

    Copy the example `.env.example` to `.env` and set the following environment variables:

    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/yourdatabase
    NODE_ENV=development
    ```

## Environment Variables

- **`PORT`**: Port for the server to listen on (default is 5000).
- **`MONGO_URI`**: MongoDB connection URI.
- **`NODE_ENV`**: The environment in which the server is running (development or production).

## Database Connection

**`config/db.js`**

- **Function:** Establishes a connection to the MongoDB database using Mongoose.
- **Usage:** Called in `app.js` to initialize the database connection.

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
```

## Middleware

### Logger Middleware

**`middleware/logger.js`**

- **Function:** Logs the HTTP method and URL of incoming requests.
- **Usage:** Added to the middleware stack in `app.js` for basic request logging.

```javascript
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = { logger };
```

### Error Handling Middleware

**`middleware/errorMiddleware.js`**

- **Function:** Handles 404 errors and general server errors.
- **Usage:** Added to the middleware stack in `app.js` to provide robust error handling.

```javascript
// Handle 404 Not Found
const notFound = (req, res, next) => {
    res.status(404);
    res.json({ message: 'Not Found' });
};

// General error handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.json({ message: err.message });
};

module.exports = { notFound, errorHandler };
```

## Models

### Mall Model

**`models/Mall.js`**

- **Function:** Defines the schema for mall entities.
- **Fields:**
  - `name`: Name of the mall.
  - `location`: Geographical location.
  - `address`: Physical address.
  - `openingDate`: Opening date of the mall.
  - `closingDate`: Closing date of the mall.
  - `coverImage`: Base64-encoded image for the mall.

```javascript
const mongoose = require('mongoose');

const mallSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
    openingDate: { type: Date, required: true },
    closingDate: { type: Date, required: true },
    coverImage: { type: String, required: true },
}, { timestamps: true });

const Mall = mongoose.model('Mall', mallSchema);

module.exports = Mall;
```

### Store Model

**`models/Store.js`**

- **Function:** Defines the schema for store entities.
- **Fields:**
  - `name`: Name of the store.
  - `description`: Description of the store.
  - `relatedMall`: Reference to the related mall.
  - `address`: Address inside the mall.
  - `openingDate`: Opening date of the store.
  - `closingDate`: Closing date of the store.
  - `coverImage`: Base64-encoded image for the store.

```javascript
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    relatedMall: { type: mongoose.Schema.Types.ObjectId, ref: 'Mall', required: true },
    address: { type: String, required: true },
    openingDate: { type: Date, required: true },
    closingDate: { type: Date, required: true },
    coverImage: { type: String, required: true },
}, { timestamps: true });

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
```

### Product Model

**`models/Product.js`**

- **Function:** Defines the schema for product entities.
- **Fields:**
  - `name`: Name of the product.
  - `description`: Description of the product.
  - `relatedStore`: Reference to the related store.
  - `coverImage`: Base64-encoded image for the product.
  - `createdBy`: User ID of the creator.

```javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    relatedStore: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    coverImage: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
```

## Controllers

### Authentication Controller

**`controllers/authController.js`**

- **Function:** Handles user registration, login, and profile retrieval.
- **Methods:**
  - `registerUser`: Registers a new user.
  - `loginUser`: Authenticates a user and returns a JWT.
  - `getUserProfile`: Retrieves user profile information.

### Mall Controller

**`controllers/mallController.js`**

- **Function:** Manages mall operations.
- **Methods:**
  - `createMall`: Creates a new mall (admin only).
  - `getMalls`: Retrieves all malls.
  - `getMallById`: Retrieves a mall by ID.
  - `updateMall`: Updates a mall (admin only).
  - `deleteMall`: Deletes a mall (admin only).

### Store Controller

**`controllers/storeController.js`**

- **Function:** Manages store operations.
- **Methods:**
  - `createStore`: Creates a new store (admin only).
  - `getStores`: Retrieves all stores.
  - `getStoreById`: Retrieves a store by ID.
  - `updateStore`: Updates a store (admin only).
  - `deleteStore`: Deletes a store (admin only).

### Product Controller

**`controllers/productController.js`**

- **Function:** Manages product operations.
- **Methods:**
  - `createProduct`: Creates a new product (admin or moderator only).
  - `getProducts`: Retrieves all products.
  - `getProductById`: Retrieves a product by ID.
  - `updateProduct`: Updates a product (creator or admin only).
  - `deleteProduct`: Deletes a product (creator or admin only).

## Routes

### Authentication Routes

**`routes/authRoutes.js`**

- **Endpoints:**
  - **`POST /api/auth/register`**: Registers a new user.
  - **`POST /api/auth/login`**: Logs in a user and returns a JWT token.
  - **`GET /api/auth/profile`**: Retrieves user profile information (protected).

### Mall

 Routes

**`routes/mallRoutes.js`**

- **Endpoints:**
  - **`GET /api/malls`**: Retrieves all malls.
  - **`GET /api/malls/:id`**: Retrieves a mall by ID.
  - **`POST /api/malls`**: Creates a new mall (admin only).
  - **`PUT /api/malls/:id`**: Updates a mall (admin only).
  - **`DELETE /api/malls/:id`**: Deletes a mall (admin only).

### Store Routes

**`routes/storeRoutes.js`**

- **Endpoints:**
  - **`GET /api/stores`**: Retrieves all stores.
  - **`GET /api/stores/:id`**: Retrieves a store by ID.
  - **`POST /api/stores`**: Creates a new store (admin only).
  - **`PUT /api/stores/:id`**: Updates a store (admin only).
  - **`DELETE /api/stores/:id`**: Deletes a store (admin only).

### Product Routes

**`routes/productRoutes.js`**

- **Endpoints:**
  - **`GET /api/products`**: Retrieves all products.
  - **`GET /api/products/:id`**: Retrieves a product by ID.
  - **`POST /api/products`**: Creates a new product (admin or moderator only).
  - **`PUT /api/products/:id`**: Updates a product (creator or admin only).
  - **`DELETE /api/products/:id`**: Deletes a product (creator or admin only).

## Middleware Utilities

### Authentication Middleware

**`middleware/authMiddleware.js`**

- **Function:** Validates JWT tokens and attaches user information to the request.
- **Usage:** Protects routes by ensuring requests have valid tokens.

```javascript
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401);
            res.json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401);
        res.json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };
```

### Role Middleware

**`middleware/roleMiddleware.js`**

- **Function:** Authorizes users based on their roles.
- **Usage:** Ensures that only users with specific roles can access certain routes.

```javascript
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(403);
            res.json({ message: 'Forbidden' });
        } else {
            next();
        }
    };
};

module.exports = { authorizeRoles };
```

## Error Handling

The backend uses a combination of **404 Not Found** and **500 Internal Server Error** handlers to manage errors. These are provided in **`middleware/errorMiddleware.js`**.

## Testing

Testing can be performed using tools like **Postman** or **cURL** to verify the API endpoints. For unit and integration tests, you can use frameworks like **Mocha**, **Chai**, or **Jest**. Tests should cover various scenarios, including successful requests, invalid inputs, and authorization checks.

## Deployment

To deploy the backend server, you can use services like **Heroku**, **AWS**, or **DigitalOcean**. Follow the specific deployment instructions for your chosen platform, ensuring that you:

1. **Set Environment Variables:** Configure environment variables such as `PORT` and `MONGO_URI` on the deployment platform.
2. **Push Code:** Deploy your code using Git or a deployment tool.
3. **Monitor Logs:** Check logs for errors and ensure the server is running smoothly.

## Starting the Server

To start the server locally:

```bash
npm start
```

The server will listen on the port specified by the `PORT` environment variable or default to port 5000.

## Contributing

Contributions are welcome! Please submit issues or pull requests on GitHub. Follow the coding style and include tests for new features or bug fixes.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.