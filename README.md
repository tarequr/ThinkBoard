# 🧠 ThinkBoard

ThinkBoard is a Node.js + Express application that stores data in MongoDB and uses Upstash Redis for API rate limiting.  
It’s designed to be fast, scalable, and easy to set up.

---

## 📦 Features

- **Express.js** → Web framework to handle HTTP requests and routes.
- **Mongoose** → ODM (Object Data Modeling) library for MongoDB.
- **Dotenv** → Loads environment variables from `.env` files.
- **Nodemon** → Automatically restarts the server during development.
- **Upstash Redis** → Cloud-based Redis used for rate limiting.
- **RateLimit** → Controls how many requests a user can make in a given time.

---

## 🚀 Tech Stack

- **Node.js** → JavaScript runtime.
- **Express.js v4.18.2** → API and route handling.
- **MongoDB + Mongoose v7.0.3** → Database + modeling.
- **Upstash Redis** → Serverless Redis database.
- **Dotenv** → Configuration management.
- **Nodemon** (dev dependency) → Live reload during development.

---

## 🛠 Installation & Setup

### 1️⃣ Clone the repository

This copies the code to your local machine:

```bash
git clone <your-repo-url>
cd thinkboard
```

### 2️⃣ Install dependencies

These commands install everything needed for the project:

```bash
npm init -y                       # Creates package.json with default settings
npm install express@4.18.2        # Installs Express framework
npm install nodemon -D            # Installs Nodemon as a dev dependency
npm install mongoose@7.0.3        # Installs Mongoose for MongoDB
npm install dotenv                # Installs dotenv for .env file handling
npm install @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9  # Upstash Redis + RateLimit
```

### 3️⃣ Create `.env` file

The `.env` file stores sensitive information like database URLs and API tokens.  
Create it in the root folder:

```env
MONGO_URI=<your_mongo_uri>                    # Your MongoDB connection string
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>  # Redis REST API URL from Upstash
UPSTASH_REDIS_REST_TOKEN=<your_redis_token>   # Redis token from Upstash
```

You can get these values from:

- **MongoDB** → [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
- **Upstash Redis** → [https://console.upstash.com/](https://console.upstash.com/)

---

## 📂 Project Structure

```
thinkboard/
├── node_modules/          # Installed packages
├── .env                   # Environment variables
├── package.json           # Project metadata & dependencies
├── server.js              # Main server file
└── README.md              # Project documentation
```

---

## ▶️ Running the Project

### Development Mode

Runs the server with Nodemon (auto-restarts when files change):

```bash
npx nodemon server.js
```

### Production Mode

Runs the server normally without auto-restart:

```bash
node server.js
```

---

## 📜 License

This project is licensed under the **MIT License**, meaning you can freely use, modify, and distribute it.

---
