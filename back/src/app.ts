import "dotenv/config";
import express from "express";
import globalRouter from "./routes/routes";
const buildServer = () => {
  const server = express();
  server.use(express.json());
  server.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Server run",
    });
  });
  server.use("/api/v1", globalRouter);
  return server;
};
export default buildServer;
