const express = require("express");
const { CreateUser, upload, loginUser, deleteUser, updateUser, getUserProfile } = require("../controllers/userController.service");
const authMiddleware = require("../middleware/authMiddleware");


const userRouter = express.Router();

userRouter.post("/signUp", upload.single("avatar"), CreateUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", authMiddleware, getUserProfile);
userRouter.put("/update-profile", authMiddleware, upload.single("avatar"), updateUser);
userRouter.delete("/userdelete", authMiddleware, deleteUser);

module.exports = userRouter;
