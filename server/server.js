import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// DB connection
connectDb();

// ✅ FIX 1: Proper CORS for frontend (VERY IMPORTANT)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ FIX 2: body limit (important for resume + images)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});