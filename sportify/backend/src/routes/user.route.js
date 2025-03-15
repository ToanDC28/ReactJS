import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/', protectRoute, getAllUsers);

export default router;