const connectDatabase = async () => {
    try {
        const mongoose = require('mongoose');
        const databaseUrl = "mongodb+srv://tarequrr8:e0md5DE9aZDIxQPC@cluster0.uhsjkyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(databaseUrl, {
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