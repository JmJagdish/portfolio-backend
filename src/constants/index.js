export const DB_NAME = "portfolio";

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export const MESSAGES = {
  PROJECT_CREATED: "Project created successfully.",
  PROJECT_UPDATED: "Project updated successfully.",
  PROJECT_DELETED: "Project deleted successfully.",
  PROJECT_NOT_FOUND: "Project not found.",
  SERVER_ERROR: "Something went wrong.",
};

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const API_PREFIX = "/api/v1";

export const COLLECTIONS = {
  PROJECTS: "projects",
  SKILLS: "skills",
  CONTACTS: "contacts",
};

export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB