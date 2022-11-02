import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

export default globalRouter;
