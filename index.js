import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken";

let app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  let token = req.header("Authorization");
  if (token != null) {
    token = token.replace("Bearer ", "");

    jwt.verify(token, "kv-secret-89!", (error, decoded) => {
      if (!error) {
        req.user = decoded;
      }
    });
  }
  next();
});

let mongoUrl =
  "mongodb+srv://admin:123@cluster0.6ubd6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(3005, () => {
  console.log("Server is runing on port 3005");
});
