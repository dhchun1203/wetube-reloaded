import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit user");

userRouter.get("/", handleEditUser);

export default userRouter;
