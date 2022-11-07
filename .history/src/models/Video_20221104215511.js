import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
});

const video = {
  title: "Heki",
  description: "lalalala",
  createdAt: 12121212,
  hashtags: ["#hi", "#mongo"],
};
