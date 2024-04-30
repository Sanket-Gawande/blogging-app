import Post from "@/lib/models/post.model";
import connectMongo from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectMongo();
    const posts = await Post.find({});
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
