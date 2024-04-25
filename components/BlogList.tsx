import Image from "next/image";

type CardProps = {
  img: string;
  title: string;
};

const Card = ({ img, title }: CardProps) => (
  <div className="w-full p-4 mb-8">
    <div className="flex flex-col gap-4 cursor-pointer">
      <Image
        src={img}
        alt=""
        className="border border-gray-900 rounded-lg w-full aspect-video"
        width={512}
        height={288}
      />
      <h2 className="text-xl line-clamp-2">{title}</h2>
    </div>
  </div>
);

const BlogList = () => {
  var img =
    "https://images.unsplash.com/photo-1638225183759-1004d748c726?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  var title =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis itaque consequatur expedita recusandae ea veritatis fuga eaque illum laborum";
  var arr = new Array(13).fill(null).map(() => {
    return { img, title };
  });

  return (
    <main className="mx-auto max-w-7xl px-4 text-[#dddddd]">
      <h2 className="text-2xl my-4">Latest Posts</h2>
      <section className="px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center">
        {arr.map(({ img, title }, i) => (
          <Card key={i} img={img} title={title} />
        ))}
      </section>
    </main>
  );
};

export default BlogList;
