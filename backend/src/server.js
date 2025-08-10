const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Importing CORS middleware

const nodesRoutes = require('./routes/nodesRoutes'); // Importing the nodes routes
const connectDB = require('./config/database');
const rateLimiter = require('./middleware/rateLimiter');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// connectDB();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies and for application/json
app.use(express.urlencoded({ extended: true })); // for form-data and x-www-form-urlencoded
app.use(rateLimiter); // Apply rate limiting middleware

app.get('/', (req, res) => {
    res.send('Hello World! I am a backend!');
});

app.use('/api/notes', nodesRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`);
    });
});

