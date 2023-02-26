// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import * as dotenv from 'dotenv'
dotenv.config()
import { MongoClient } from "mongodb";
import cors from "cors";
import roomRouter from "./router/room.router.js"

const app = express();

// const PORT = 4000;

const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1"

const client = new MongoClient(process.env.MONGO_URL);
await client.connect();
console.log("Mongo is Connected!!!")

app.use(cors());

app.use(express.json())

app.get("/", function (request, response) {
  response.send("Welcome to Hall Booking");
});

app.use("/rooms", roomRouter);


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client }
