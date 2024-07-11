import { connectDB } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "User already exists" }, { status: 304 });
    }
    const hashPass = bcrypt.hashSync(newUser.password, 14);
    const result = await userCollection.insertOne({
      ...newUser,
      password: hashPass,
    });
    return Response.json({ message: "User Created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something wrong!", error },
      { status: 500 }
    );
  }
};
