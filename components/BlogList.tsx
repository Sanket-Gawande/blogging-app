import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

const getPosts = async () => {
  const posts = await fetch(`${process.env.MAIN_URI}/api/posts`);
  return posts;
};

const Card = ({ post }: any) => (
  <Link href={`/blog/${post.postId}`} className="w-full p-4 mb-8">
    <div className="flex flex-col gap-3 cursor-pointer">
      <Image
        alt={post.title}
        src={post.thumbnail}
        width={512}
        height={288}
        className="border border-gray-800 rounded-lg w-full aspect-video object-cover"
      />
      <h2 className="text-xl line-clamp-2 text-white font-medium">
        {post.title}
      </h2>
      <div className="flex gap-3 items-center">
        <Image
          alt={post.author.name}
          src={post.author.profilePhoto}
          width={24}
          height={24}
          className="border border-gray-800 rounded-full aspect-square object-cover"
        />
        <h3 className="text-white text-sm">{post.author.name}</h3>
        <p className="text-gray-400 text-sm">{formatDate(post.createdAt)}</p>
      </div>
    </div>
  </Link>
);

const BlogList = async () => {
  const data = await getPosts();
  const { posts } = await data.json();

  return (
    <main className="mx-auto max-w-7xl px-4 text-[#dddddd]">
      <h2 className="text-2xl my-4">Latest Posts</h2>
      <section className="px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center">
        {posts.map((post: any, i: number) => (
          <Card key={i} post={post} />
        ))}
      </section>
    </main>
  );
};

export default BlogList;
