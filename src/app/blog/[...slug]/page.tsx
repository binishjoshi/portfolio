import { Metadata } from "next";
import { notFound } from "next/navigation";

import { posts } from "#site/content";
import { MdxContent } from "@/components/mdx-components";

import "@/styles/mdx.css";
import { siteConfig } from "../../../../config/site";

interface BlogViewPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({
  params,
}: BlogViewPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: {
      name: siteConfig.author,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
    },
  };
}

async function getPostFromParams(params: BlogViewPageProps["params"]) {
  const slug = (await params)?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function BlogViewPage({ params }: BlogViewPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MdxContent code={post.body} />
    </article>
  );
}
