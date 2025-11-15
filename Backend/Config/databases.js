import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("⚠️ MONGO_URI is not defined in your .env file");
    }

    console.log("🔍 Attempting MongoDB connection...");

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB has connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;