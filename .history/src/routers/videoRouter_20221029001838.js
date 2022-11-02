import express from "express";
import {
  watch,
  edit,
} from "../../.history/src/controllers/videoController_20221029001535";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
