const mongoose = require("mongoose");

module.exports = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB:', mongoose.connection.name);
    } catch (err) {
        console.error('Connection error:', err);
    }
}