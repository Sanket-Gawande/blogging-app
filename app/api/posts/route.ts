import Post from "@/lib/models/post.model";
import User from "@/lib/models/user.model";
import connectMongo from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectMongo();
    const posts = await Post.find({}).select("-_id -__v").limit(15).populate({
      path: "author",
      model: User,
      select: "name profilePhoto",
    });
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
