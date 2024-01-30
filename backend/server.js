import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./config/dbConnection.js";
// Routes
import userRoutes from "./routes/userRoutes.js";
import createBlogRoutes from "./routes/createBlogRoutes.js";
import getBlogRoutes from "./routes/getBlogRoutes.js";

connectDB(); // connect to the database

const server = new express();

const PORT = 8000;

// Middleware
// Enable CORS= To allow your server to accept requests from other origins (not just other ports), you need to enable Cross-Origin Resource Sharing (CORS).
// I can also use cors() with no options to allow specific origins.
server.use(cors());
// Parse the body of the request
server.use(express.json());

// Use the user routes
server.use("/create", createBlogRoutes); // I should add a prefix to all my routes to avoid authentication conflicts
// as above route is private and using auth middleware so it'll restrict the routes below if I do not add base route differnce
// server.use(userRoutes, getBlogRoutes);  I can group multiple routes like this too.
server.use(userRoutes);
server.use("/blog", getBlogRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
