import Post from "@/lib/models/post.model";
import User from "@/lib/models/user.model";
import connectMongo from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await connectMongo();
    const post = await Post.findOne({ postId: id })
      .select("-_id -__v")
      .populate({
        path: "author",
        model: User,
        select: "-_id name profilePhoto",
      });
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
