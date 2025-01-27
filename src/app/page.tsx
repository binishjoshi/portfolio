import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="pb-8 pt-6 md:mt-10 md:pb-12">
      <div className="container flex flex-col gap-4 text-center">
        <h1 className="lg:text-7l text-balance text-3xl font-black sm:text-5xl md:text-6xl">
          Hi, I&apos;m Binish.
        </h1>
        <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
          Product Engineer and Fullstack Developer.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/portfolio"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
          >
            Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
