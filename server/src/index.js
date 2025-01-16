import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/usersRoute.js";

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/Recipes")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB error", err));

app.listen(3000, () => {
  console.log("server connected successfully");
});
