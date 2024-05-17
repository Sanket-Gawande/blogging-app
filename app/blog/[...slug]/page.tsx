import formatDate from "@/lib/formatDate";
import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";
import rangeParser from "parse-numeric-range";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const revalidate = 3600;

const getPost = async (slug: string) => {
  const id = slug.slice(slug.length - 10);
  const post = await fetch(`${process.env.MAIN_URI}/api/posts/${id}`);
  return post;
};

const PostPage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug: slugArr } = params;
  const [slug] = slugArr;
  const data = await getPost(slug);
  const { post } = await data.json();

  const syntaxTheme = oneDark;

  const MarkdownComponents: object = {
    code({ node, inline, className, ...props }: any) {
      const hasLang = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)![1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers);
          const highlight = highlightLines;
          const data = highlight.includes(applyHighlights) ? "highlight" : null;
          return { data };
        } else {
          return {};
        }
      };

      return hasLang ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <html lang="en"></html>
      </Head>
      <section className="text-white mt-8 mb-20 md:mt-12 lg:mt-20 space-y-4 md:space-y-8">
        <p className="text-center text-slate-11 text-sm">
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        </p>
        <h1 className="font-semibold w-11/12 text-center max-w-5xl mx-auto text-xl md:text-3xl xl:text-4xl">
          {post.title}
        </h1>
        <div className="mx-auto flex w-fit justify-center items-center gap-3">
          <Image
            alt={post.author.name}
            src={post.author.profilePhoto}
            width={40}
            height={40}
            className="aspect-square w-7 md:w-8 rounded-full"
          />
          <p className="text-slate-11 text-sm">{post.author.name}</p>
        </div>
        <Image
          alt={post.title}
          src={post.thumbnail}
          width={1280}
          height={720}
          className="aspect-video object-cover overflow-hidden mx-auto max-w-[1200px] w-11/12 rounded-md border border-gray-900"
        />
        <section
          id="__markdown_content__"
          className="w-11/12 mx-auto space-y-6 max-w-3xl leading-6 text-slate-11 py-4"
        >
          <Markdown components={MarkdownComponents}>{post.content}</Markdown>
        </section>
      </section>
    </>
  );
};

export default PostPage;
