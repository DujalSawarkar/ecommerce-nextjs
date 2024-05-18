import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.mongo_db_url!);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Database connected");
    });

    connection.on("error", (error) => {
      console.log("Error connecting to database", error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
