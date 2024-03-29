import express from "express";
import {
  watch,
  edit,
  upload,
  deleteVideo,
  getEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
