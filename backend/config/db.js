const mongoose = require('mongoose');

// Handles the connection to MongoDB. Kept separate from server.js
// so we just import + call it, instead of cluttering the entry file.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB connection failed: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;