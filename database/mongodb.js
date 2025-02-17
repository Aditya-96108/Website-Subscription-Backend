import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables
config();

const connectToDatabase = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    if (!DB_URI) {
      throw new Error("❌ DB_URI is not defined. Check your .env file.");
    }

    await mongoose.connect(DB_URI); // No extra options needed

    console.log("✅ Connected to MongoDB Atlas successfully");
  } catch (error) {
    console.error("❌ Error Connecting to database:", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
