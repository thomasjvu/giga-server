import express from "express";
import { fn } from "../controllers/userController.js"

const router = express.Router()

router.get("/login", fn)
router.get("/register", fn)

export default router
