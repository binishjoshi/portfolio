import { notFound } from "next/navigation";

import { posts } from "#site/content";
import { MdxContent } from "@/components/mdx-components";

interface BlogViewPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: BlogViewPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  BlogViewPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function BlogViewPage({ params }: BlogViewPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert container mx-auto max-w-3xl py-6">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MdxContent code={post.body} />
    </article>
  );
}
