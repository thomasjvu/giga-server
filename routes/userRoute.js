import express from "express";
import { deleteUser } from "../controllers/userController.js"
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router()

// ROUTE    /user/:id
// @DESC    DELETE (DELETE) User in Users Collection
router.delete("/:id", verifyToken, deleteUser)

export default router
