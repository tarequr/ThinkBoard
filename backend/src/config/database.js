const connectDatabase = async () => {
    try {
        const mongoose = require('mongoose');

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // console.log('Database connection established successfully');

        console.log(`Connected to database ${mongoose.connection.host}`);
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDatabase;