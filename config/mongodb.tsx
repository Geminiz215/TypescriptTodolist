// db.js
import mongoose from "mongoose";
import * as dotenv from "dotenv";

const connectDB = async () => {
  dotenv.config();
  let connectionUrl: string;
  const databaseName = process.env.DATABASE_NAME;
  const databaseUrl = process.env.DATABASE_URL;
  if (databaseName == null || databaseName == null) {
    connectionUrl = "mongodb://localhost:27017/Todo";
  }
  connectionUrl = `${databaseUrl}${databaseName}`;
  mongoose
    .connect(connectionUrl, {})
    .then(() => console.log(`Database connected successfully`))
    .catch((err) =>
      console.log("Getting Error from DB connection" + err.message)
    );
  mongoose.set("strictQuery", false);
};

export default connectDB;
