const { Router } = require("express");
const userModel = require("../models/user.model");

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users." });
  }
});

module.exports = userRouter;
