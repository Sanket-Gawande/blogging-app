import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

const getPosts = async () => {
  const posts = await fetch(`${process.env.MAIN_URI}/api/posts`);
  return posts;
};

const Card = ({ post }: any) => (
  <Link
    href={`/blog/${post.postId}/${post.title
      .toLowerCase()
      .replaceAll(" ", "-")}`}
    className="w-full mb-8"
  >
    <div className="flex flex-col gap-3 cursor-pointer">
      <Image
        alt={post.title}
        src={post.thumbnail}
        width={512}
        height={288}
        className="border border-gray-600 rounded-md w-full aspect-video object-cover"
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
        <svg
          width="12"
          height="12"
          viewBox="0 0 15 15"
          fill="none"
          className="-mx-2 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="text-gray-400 text-sm">{formatDate(post.createdAt)}</p>
      </div>
    </div>
  </Link>
);

const BlogList = async () => {
  const data = await getPosts();
  const { posts } = await data.json();

  return (
    <main className="mx-auto mb-12 max-w-7xl px-4 text-[#dddddd]">
      <h2 className="text-lg font-medium my-8">Latest Posts</h2>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 justify-center">
        {posts.map((post: any, i: number) => (
          <Card key={i} post={post} />
        ))}
      </section>
    </main>
  );
};

export default BlogList;
