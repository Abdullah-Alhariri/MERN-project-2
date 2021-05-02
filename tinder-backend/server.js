import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 8001;

// Middle warehouse

// DB config

// API endpoints
app.get("/", (req, res) => res.status(200).send("this works clevver"));

// Listener
app.listen(port, () => console.log(`listening on port ${port}`));
