import mongoose from "mongoose";

import { Data } from "../Data.js"
import { DataModel } from "../model/model.js";
// dotenv.config();

const MONGO_URI =  "mongodb://localhost:27017/data_DB";

export const dbconnect = async () => {
  try {
    await mongoose.connect(MONGO_URI,{});
    console.log("Connected successfully to MongoDB");
    await seedData();

  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

async function seedData() {
  try {
    const dataCount = await DataModel.countDocuments();
    if (dataCount > 0) {
      console.log("Data seed is already done!");
      return;
    }
    await DataModel.insertMany(Data);
    console.log("Data seed is done!");
  } catch (error) {
    console.error("Error during data seeding:", error.message);
  }
}