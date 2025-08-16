import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import path from "path";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

import routes from "./app/routes";
import corsOptions from "./config/corsOption";

// ** making app variable and store it into express functions
const app: Application = express();

//  **  Cross Origin Resource Sharing
// ? now it will receive all the req
app.use(cors(corsOptions));
//app.options("*", cors(corsOptions)); // Handle preflight for all routes

// ** Parser
app.use(express.json());

//  ** built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser() as any);

// ** express.static() is a built-in middleware in Express used to serve static files (e.g., images, stylesheets, JavaScript files, fonts, etc.) from a specified directory.
app.use(express.static(path.join(__dirname, "..", "public"))); // Use '..' to move out of the 'src' folder

//** Routing
app.get("/", async (req, res) => {
  res.status(200).json({ message: "checking API health 👩‍⚕️" });
});

//  Using routes for whole application
console.log("Before routes");
app.use("/api/v1", routes);
console.log("After routes");

//  Global error handler Function
app.use(globalErrorHandler as any);

// TODO  => Not Found handler route
app.use(notFound as any);

export default app;
