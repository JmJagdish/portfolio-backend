import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined.");
    }

    const connection = await mongoose.connect(process.env.MONGO_URI);

    logger.info(
      `✅ MongoDB Connected | Database: ${connection.connection.name}`,
    );
  } catch (error) {
    logger.error("❌ MongoDB Connection Failed");
    logger.error(error.message);

    process.exit(1);
  }
};

export default connectDB;
