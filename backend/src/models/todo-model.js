import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ToDo = mongoose.model("ToDo", todoSchema);
