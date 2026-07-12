import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    image: {
      type: String,
      required: [true, "Project image is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
      minlength: [20, "Description must be at least 20 characters"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },

    github: {
      type: String,
      required: [true, "GitHub URL is required"],
      trim: true,
      match: [/^https?:\/\/.+/, "Please enter a valid GitHub URL"],
    },

    live: {
      type: String,
      required: [true, "Live URL is required"],
      trim: true,
      match: [/^https?:\/\/.+/, "Please enter a valid Live URL"],
    },

    tech: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      required: [true, "At least one technology is required"],
      validate: {
        validator: (value) => value.length > 0,
        message: "Please add at least one technology",
      },
    },

    displayOrder: {
      type: Number,
      default: 0,
      min: [0, "Display order cannot be negative"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

projectSchema.index({ displayOrder: 1 });
projectSchema.index({ createdAt: -1 });

const Project = mongoose.model("Project", projectSchema);

export default Project;
