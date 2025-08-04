const express = require('express');
const dotenv = require('dotenv');
const nodesRoutes = require('./routes/nodesRoutes'); // Importing the nodes routes
const connectDB = require('./config/database');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World! I am a backend!');
});

app.use('/api/notes', nodesRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});