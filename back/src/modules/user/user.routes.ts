import { Router } from "express";
import userControllers from "./user.controllers";

const router = Router();
router.get("/get", userControllers.getAllUsers);
export default router;
