import express from "express";
import {
  see,
  edit,
  upload,
  deleteVideo,
} from "../../.history/src/controllers/videoController_20221029001535";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
