import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import cors from "cors";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:5173/"],
};
globalRouter.use("/auth", cors(corsConfig), authRoutes);
export default globalRouter;
