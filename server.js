import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "morgan";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import conversationRoute from "./routes/conversationRoute.js";
import gigRoute from "./routes/gigRoute.js";
import messageRoute from "./routes/messageRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import orderRoute from "./routes/orderRoute.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ConnectDB
mongoose.set("strictQuery", true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_STRING);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
};

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/gigs", gigRoute);
app.use("/orders", orderRoute);
app.use("/conversations", conversationRoute);
app.use("/messages", messageRoute);
app.use("/reviews", reviewRoute);

// Server Homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Error Handling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!"

    return res.status(errorStatus).send(errorMessage)
})

// Listen for server and connect to MongoDB
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on PORT: ${PORT}`);
    console.log(`Visit the website at http://localhost:${PORT}`);
});
