import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "../Backend/Db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import authRoute from "./route/auth.route.js";

dotenv.config();

const app = express();
const PORT = 5000

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);

// Start server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
