"use client";

import Link from "next/link";
import { CalendarIcon } from "lucide-react";

import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ date, slug, title, description }: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-b border-border py-2">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-2 text-sm font-medium sm:text-base">
            <CalendarIcon className="size-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more...
        </Link>
      </div>
    </article>
  );
}
