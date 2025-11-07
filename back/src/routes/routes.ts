import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/user/user.routes";
import cors from "cors";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:5173"],
};
globalRouter.use("/auth", cors(corsConfig), authRoutes);
globalRouter.use("/users", cors(corsConfig), userRoutes);
export default globalRouter;
