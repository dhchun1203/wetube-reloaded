import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  createdAt: Date,
  hashtags: [{ type: String }],
});
