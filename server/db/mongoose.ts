import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI!);
};

dbConnect().catch((err) => console.log(err));

export default dbConnect;
