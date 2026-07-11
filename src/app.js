import express from "express";
import cors from "cors";

import ApiResponse from "./utils/ApiResponse.js";
import errorHandler from "./middleware/error.middleware.js";

// Routes
// import projectRoutes from "./routes/project.routes.js";
// import skillRoutes from "./routes/skill.routes.js";
// import experienceRoutes from "./routes/experience.routes.js";
// import contactRoutes from "./routes/contact.routes.js";

const app = express();

/* ========================================
   Global Middleware
======================================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ========================================
   Health Check
======================================== */

app.get("/", (req, res) => {
  res
    .status(200)
    .json(ApiResponse(200, null, "Portfolio API is running successfully."));
});

/* ========================================
   API Routes
======================================== */

// app.use("/api/projects", projectRoutes);
// app.use("/api/skills", skillRoutes);
// app.use("/api/experiences", experienceRoutes);
// app.use("/api/contact", contactRoutes);

/* ========================================
   404 Route Handler
======================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ========================================
   Global Error Handler
   (Always keep this LAST)
======================================== */

app.use(errorHandler);

export default app;
