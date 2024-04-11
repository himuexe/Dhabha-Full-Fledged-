import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to Database"));

const app = express(); //express server


app.use(express.json());
app.use(cors());
app.get("/test", async (req: Request, res: Response) => { //request and response
    res.json({ message: "Hello there!" });
});
app.listen(7000, () => {
    console.log("server started on localhost:7000");
});