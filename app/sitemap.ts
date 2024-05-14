export const revalidate = 3600;

export default async function sitemap() {
  let data;
  const uri = process.env.MAIN_URI!;

  try {
    const res = await fetch(`${uri}/api/posts/sitemap`);
    const { posts } = await res.json();
    data = posts;
  } catch (error) {
    console.log(error);
    data = [];
  }

  const posts = data.map((post: any) => ({
    url: `${uri}/blog/${post.postId}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: uri,
      priority: 1,
    },
    {
      url: `${uri}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${uri}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${uri}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts,
  ];
}
