import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "morgan"
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import conversationRoute from "./routes/conversationRoute.js"
import gigRoute from "./routes/gigRoute.js"
import messageRoute from "./routes/messageRoute.js"
import reviewRoute from "./routes/reviewRoute.js"
import orderRoute from "./routes/orderRoute.js"

const PORT = 1024;
const app = express();
dotenv.config();


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
app.use(logger("dev"))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/auth", authRoute)
app.use("/users", userRoute)
app.use("/gigs", gigRoute)
app.use("/orders", orderRoute)
app.use("/conversations", conversationRoute)
app.use("/messages", messageRoute)
app.use("/reviews", reviewRoute)

// Listen for server and connect to MongoDB
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on PORT: ${PORT}`);
    console.log(`Visit the website at http://localhost:${PORT}`);
});
