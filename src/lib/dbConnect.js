import { MongoClient, ServerApiVersion } from "mongodb";
import toast from "react-hot-toast";

let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("car-doctor-pro");
    return db;
  } catch (error) {
    toast.error(error.message);
  }
};
