import express from "express";
import { join, login } from "../controllers/userController";
import { trending } from "../controllers/videoController";
import { home } from "../../.history/src/controllers/videoController_20221107184027";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
