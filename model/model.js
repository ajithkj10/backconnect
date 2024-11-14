import { model, Schema } from "mongoose";

// Data schema
const dataSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imgsrc: { type: String, required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: false },
    timestamps: true,
  }
);

export const DataModel = model("Data", dataSchema);