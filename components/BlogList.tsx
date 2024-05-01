import Image from "next/image";
import Link from "next/link";

const getPosts = async () => {
  const posts = await fetch(`${process.env.MAIN_URI}/api/posts`);
  return posts;
};

type CardProps = {
  img: string;
  title: string;
};

const Card = ({ img, title }: CardProps) => (
  <Link
    href={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`}
    className="w-full p-4 mb-8"
  >
    <div className="flex flex-col gap-4 cursor-pointer">
      <Image
        src={img}
        alt=""
        className="border border-gray-900 rounded-lg w-full aspect-video object-cover"
        width={512}
        height={288}
      />
      <h2 className="text-xl line-clamp-2">{title}</h2>
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
          <Card key={i} img={post.thumbnail} title={post.title} />
        ))}
      </section>
    </main>
  );
};

export default BlogList;
