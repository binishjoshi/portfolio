import { Metadata } from "next";
import { notFound } from "next/navigation";

import { works } from "#site/content";
import { MdxContent } from "@/components/mdx-components";

import "@/styles/mdx.css";
import { siteConfig } from "../../../../config/site";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { CalendarIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface WorkViewPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({
  params,
}: WorkViewPageProps): Promise<Metadata> {
  const post = await getWorkFromParams(params);

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
      images: post.image ?? post.image,
    },
  };
}

async function getWorkFromParams(params: WorkViewPageProps["params"]) {
  const slug = (await params)?.slug?.join("/");
  const work = works.find((work) => work.slugAsParams === slug);

  return work;
}

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slugAsParams.split("/") }));
}

export default async function WorkViewPage({ params }: WorkViewPageProps) {
  const work = await getWorkFromParams(params);

  if (!work || !work.published) {
    notFound();
  }

  return (
    <article className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <div>
        <h1 className="mb-2 text-4xl md:text-5xl lg:text-6xl">{work.title}</h1>
        {work.date && (
          <div className="mb-2 flex items-center gap-1">
            <CalendarIcon className="size-3 md:size-4" />
            <span className="text-xs text-muted-foreground md:text-sm">
              {formatDate(work.date)}
            </span>
          </div>
        )}
        {work.description ? (
          <p className="mt-0 text-base text-muted-foreground">
            {work.description}
          </p>
        ) : null}
        <hr className="my-4" />
        <div className="flex flex-wrap gap-4 pt-2">
          {work.sourceCode && (
            <Link
              href={work.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-color no-underline hover:underline"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Icons.github className="h-4 w-4" />
                Source Code
              </Button>
            </Link>
          )}

          {work.url && (
            <Link
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-color no-underline hover:underline"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </Link>
          )}
        </div>

        {work.image && (
          <Image
            src={work.image}
            width="1920"
            height="1044"
            alt={`${work.title} Screenshot`}
          />
        )}
      </div>
      <MdxContent code={work.body} />
    </article>
  );
}
