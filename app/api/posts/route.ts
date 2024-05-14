import Post from "@/lib/models/post.model";
import User from "@/lib/models/user.model";
import connectMongo from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectMongo();
    const posts = await Post.find({}).select("-_id -__v -content").populate({
      path: "author",
      model: User,
      select: "-_id name profilePhoto",
    });
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
