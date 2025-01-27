import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { MailIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="pb-8 pt-6 md:mt-10 md:pb-12">
      <div className="container flex flex-col items-center gap-4 text-center">
        <Image
          src="/static/images/profile-pic.jpg"
          height="200"
          width="200"
          alt="Profile Picture"
          className="rounded-full"
        />
        <h1 className="lg:text-7l text-balance text-3xl font-black sm:text-5xl md:text-6xl">
          Hi, I&apos;m Binish.
        </h1>
        <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
          Product Engineer and Fullstack Developer.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className={cn(buttonVariants({ size: "sm" }), "w-full sm:w-fit")}
          >
            Blog
          </Link>
          <Link
            href="/portfolio"
            className={cn(buttonVariants({ size: "sm" }), "w-full sm:w-fit")}
          >
            Portfolio
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="mailto:binishjoshi@proton.me"
            className={cn(buttonVariants({ size: "sm" }), "px-4 sm:w-fit")}
          >
            <MailIcon className="size-6" />
            Contact Me
          </Link>
        </div>
        <div className="flex max-w-screen-md flex-col gap-6">
          <p>
            I have worked as a Product Engineer and a Fullstack Developer in
            freelance projects and for companies. If you&apos;d like to
            collaborate, please email me for my availability.
          </p>
          <p>
            Aside from work, I like to learn new languages, read books, watch
            anime and play guitar.
          </p>
        </div>
      </div>
    </section>
  );
}
