"use client";

import Link from "next/link";
import { CalendarIcon, MoveRightIcon } from "lucide-react";

import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface WorkItemProps {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  url?: string;
  sourceCode?: string;
  image?: string;
}

export function WorkItem({
  date,
  slug,
  title,
  description,
  image,
}: WorkItemProps) {
  return (
    <Card className="flex flex-col gap-2 border-b border-border p-6">
      <div className="flex w-full justify-between">
        <h2 className="text-4xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
        <Link
          href={slug}
          className="flex items-center gap-2 hover:cursor-pointer hover:underline"
        >
          <p>Open Details</p>
          <MoveRightIcon />
        </Link>
      </div>
      {date && (
        <div className="mb-2 flex items-center gap-1">
          <CalendarIcon className="size-3 md:size-4" />
          <span className="text-xs text-muted-foreground md:text-sm">
            {formatDate(date)}
          </span>
        </div>
      )}
      <div className="max-w-none text-muted-foreground">{description}</div>
      {image && (
        <Image
          src={image}
          width="1920"
          height="1044"
          alt="portfolio-screenshot"
        />
      )}
    </Card>
  );
}
