import express from "express";

import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  patchProject,
  deleteProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.route("/").get(getProjects).post(createProject);

router
  .route("/:id")
  .get(getProject)
  .put(updateProject)
  .patch(patchProject)
  .delete(deleteProject);

export default router;
