import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(7000, () => {
    console.log("server running on localhost:7000");
});
//# sourceMappingURL=index.js.map