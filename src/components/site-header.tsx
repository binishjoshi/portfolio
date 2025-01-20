import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

import { siteConfig } from "../../config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop:blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 mx-auto">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center [&_svg]:size-6 gap-4 mx-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <FaGithub />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <FaLinkedin />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
