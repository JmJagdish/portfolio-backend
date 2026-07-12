import Project from "../models/Project.model.js";
import ApiError from "../utils/ApiError.js";

export const getAllProjects = async () => {
  return await Project.find().sort({
    displayOrder: 1,
    createdAt: -1,
  });
};

export const getProjectById = async (id) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return project;
};

export const createProject = async (projectData) => {
  return await Project.create(projectData);
};

export const updateProject = async (id, projectData) => {
  const project = await Project.findByIdAndUpdate(id, projectData, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return project;
};

export const patchProject = async (id, projectData) => {
  const project = await Project.findByIdAndUpdate(id, projectData, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return project;
};

export const deleteProject = async (id) => {
  const project = await Project.findByIdAndDelete(id);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return project;
};
