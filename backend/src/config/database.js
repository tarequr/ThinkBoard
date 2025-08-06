const connectDatabase = async () => {
    try {
        const mongoose = require('mongoose');

        await mongoose.connect(process.env.MONGO_URI);

        console.log(`DATABASE CONNECTED SUCCESSFULLY!`);
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDatabase;