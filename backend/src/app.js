import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//routes
import todoRouter from "./routes/todo-router.js";

//router declarations
app.use("/api/v1/user", todoRouter);

//direct router for key

export { app };
