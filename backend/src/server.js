const express = require('express');
const nodesRoutes = require('./routes/nodesRoutes'); // Importing the nodes routes
const connectDB = require('./config/database');

const app = express();
const port = 3000;

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World! I am a backend!');
});

app.use('/api/notes', nodesRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});