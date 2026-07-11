import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import logger from "./utils/logger.js";

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    // Connect Database
    await connectDB();

    // Start Server
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error("❌ Failed to start server");
    logger.error(error.message);
    process.exit(1);
  }
};

startServer();
