import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";


// connection for database  process.env.=> import from .env file 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to Database"));

const app = express(); //express server


app.use(express.json());
app.use(cors());
// /api/my/user => myUserRoute

app.use("/api/my/user", myUserRoute);
// to display on terminal
app.listen(7000, () => {
    console.log("server started on localhost:7000");
});