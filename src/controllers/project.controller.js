import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import * as projectService from "../services/project.service.js";

export const getProjects = asyncHandler(async (req, res) => {
  const projects = await projectService.getAllProjects();

  return res
    .status(200)
    .json(ApiResponse(200, projects, "Projects fetched successfully"));
});

export const getProject = asyncHandler(async (req, res) => {
  const project = await projectService.getProjectById(req.params.id);

  return res
    .status(200)
    .json(ApiResponse(200, project, "Project fetched successfully"));
});

export const createProject = asyncHandler(async (req, res) => {
  const project = await projectService.createProject(req.body);

  return res
    .status(201)
    .json(ApiResponse(201, project, "Project created successfully"));
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await projectService.updateProject(req.params.id, req.body);

  return res
    .status(200)
    .json(ApiResponse(200, project, "Project updated successfully"));
});

export const patchProject = asyncHandler(async (req, res) => {
  const project = await projectService.patchProject(req.params.id, req.body);

  return res
    .status(200)
    .json(ApiResponse(200, project, "Project updated successfully"));
});

export const deleteProject = asyncHandler(async (req, res) => {
  await projectService.deleteProject(req.params.id);

  return res
    .status(200)
    .json(ApiResponse(200, null, "Project deleted successfully"));
});
