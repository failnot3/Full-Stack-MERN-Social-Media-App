import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Import router
import postRoutes from "./routes/posts.js";

// Import dotenv in ES6!
import dotenv from "dotenv";
dotenv.config({ path: "dev.env" });

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// connect to MongoDB

const mongoConnect = process.env.MONGODBKEY;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(mongoConnect, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
