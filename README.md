# To-Do Application Backend

## Overview
This is a backend application for a To-Do management system, built using **Node.js, Express, MongoDB, and JWT authentication**. It allows users to register, log in, create, update, and delete tasks while ensuring secure authentication and authorization.

## Technology Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Security:** JWT authentication, bcrypt password hashing
- **Hosting:** Render

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DalvinderSingh2022/Todo-Mongo.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Authentication

#### Register User
**Endpoint:** `POST /api/user/register`

**Request Body:**
```json
{
    "username": "Dalvinder Singh",
    "email": "dalvinder@gamil.com",
    "password": "password"
}
```

**Response:**
```json
{
    "data": {
        "userId": "67ae15f3612d30ab57860b96"
    },
    "message": "User  created"
}
```

#### Login User
**Endpoint:** `POST /api/user/login`

**Request Body:**
```json
{
    "email": "dalvinder@gamil.com",
    "password": "password"
}
```

**Response:**
```json
{
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    "message": "Login successful"
}
```

### Task Management (Requires Authentication)

#### Get All Tasks
**Endpoint:** `GET /api/task`

**Headers:**
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```json
{
    "data": [
        {
            "_id": "67ae16f3345483e182fcf667",
            "title": "title 1",
            "description": "description 1",
            "completed": false,
            "userId": "67ae15f3612d30ab57860b96",
            "createdAt": "2025-02-13T15:59:47.310Z",
            "updatedAt": "2025-02-13T15:59:47.310Z",
            "__v": 0
        }
    ],
    "message": "Tasks retrieved successfully"
}
```

#### Create Task
**Endpoint:** `POST /api/task`

**Headers:**
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Request Body:**
```json
{
    "title": "title 1",
    "description": "description 1"
}
```

**Response:**
```json
{
    "data": {
        "title": "title 1",
        "description": "description 1",
        "completed": false,
        "userId": "67ae15f3612d30ab57860b96",
        "_id": "67ae16f3345483e182fcf667",
        "createdAt": "2025-02-13T15:59:47.310Z",
        "updatedAt": "2025-02-13T15:59:47.310Z",
        "__v": 0
    },
    "message": "Task created successfully"
}
```

#### Update Task
**Endpoint:** `PUT /api/task/:id`

**Headers:**
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Request Body:**
```json
{
    "completed": true
}
```

**Response:**
```json
{
    "data": {
        "_id": "67ae16f3345483e182fcf667",
        "title": "title 1",
        "description": "description 1",
        "completed": true,
        "userId": "67ae15f3612d30ab57860b96",
        "createdAt": "2025-02-13T15:59:47.310Z",
        "updatedAt": "2025-02-13T16:02:08.311Z",
        "__v": 0
    },
    "message": "Task updated successfully"
}
```

#### Delete Task
**Endpoint:** `DELETE /api/task/:id`

**Headers:**
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```json
{
    "message": "Task deleted successfully"
}
```

---

**Deployment Link**: https://todo-mongo-856e.onrender.com
