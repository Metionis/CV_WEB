import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { ENV_VARS } from './config/envVars.js'; // Ensure this file contains your environment variables
import feedRoutes from './routes/feedback.route.js'; // Ensure correct path to feedRoute
import { connectDB } from './config/db.js'; // Ensure the path is correct
import path from "path";
import cors from 'cors'; 

// Initialize express
const app = express();
const __dirname = path.resolve();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json()); // Use body-parser to parse incoming requests
// Use feedback route
app.use("/api/feedback", feedRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Start the server
const PORT = ENV_VARS.PORT || 5000; // Default to port 5000 if ENV_VARS.PORT is not set
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
