import { Metadata, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const getPost = async () => {
  const id = "BKsJvV22iS";
  const post = await fetch(`${process.env.MAIN_URI}/api/posts/${id}`);
  return post;
};

const PostPage = async () => {
  const data = await getPost();
  const { post } = await data.json();

  // Post structure:
  // "post": {
  //     "postId": "BKsJvV22iS",
  //     "title": "First post",
  //     "content": "Dummy content",
  //     "thumbnail": "https://res.cloudinary.com/dokbqizib/image/upload/v1714561657/author/qbcsqw3zhky85uk89io0.png",
  //     "author": {
  //         "_id": "662b6209e0cf090483940631",
  //         "name": "Jay Pokale",
  //         "profilePhoto": "https://res.cloudinary.com/dokbqizib/image/upload/v1714119177/author/bc44cug9izt9czifegtl.jpg"
  //     },
  //     "createdAt": "2024-05-01T11:07:38.496Z",
  //     "updatedAt": "2024-05-01T11:07:38.496Z"
  // }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <html lang="en"></html>
      </Head>
      <section className="text-white mt-8 md:mt-12 lg:mt-20 space-y-4 md:space-y-8">
        <p className="text-center text-slate-11 text-sm">
          <time dateTime="31 January 2023">31 January 2023</time>
        </p>
        <h1 className="font-semibold w-11/12 text-center max-w-5xl mx-auto text-xl md:text-3xl xl:text-4xl">
          {post.title}
        </h1>
        <div className="mx-auto flex w-fit justify-center items-center gap-3">
          <Image
            alt="Sanket Gawande"
            src={"/me.jpg"}
            width={40}
            height={40}
            className="aspect-square w-7 md:w-8 rounded-full"
          />
          <p className="text-slate-11 text-sm">Sanket Gawande</p>
        </div>
        <Image
          alt={post.title}
          width={1200}
          height={500}
          src={
            "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=1000"
          }
          className="aspect-[16/8] object-cover overflow-hidden mx-auto max-w-[1200px] w-11/12 rounded-md border border-gray-900"
        />
        <section className="w-11/12 mx-auto max-w-3xl leading-6 text-slate-11 py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim
            laudantium rerum nemo ex odit, corrupti, quas possimus sunt quisquam
            quo alias consequatur, numquam corporis. Veritatis ad ipsa rem
            veniam vel possimus vero laborum, magnam non animi obcaecati? Alias
            perferendis officiis id ullam placeat, itaque cumque delectus soluta
            molestias numquam voluptatem repellendus iusto commodi vero ex
            quaerat voluptatum neque doloribus nulla tempore atque pariatur ab.
            Totam, delectus, nesciunt, dicta voluptas similique sint nihil
            dolorem laudantium voluptatum optio deserunt adipisci accusantium.
            Aut, alias! Assumenda quod odit eveniet veritatis non? Obcaecati,
            consequatur placeat molestias facilis earum aut culpa reiciendis
            voluptate officia, sed odio, alias inventore ad. Consequuntur
            officia eius, doloribus delectus tempore eveniet.
          </p>
        </section>
      </section>
    </>
  );
};

export default PostPage;
