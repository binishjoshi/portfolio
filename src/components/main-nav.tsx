"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        Binish Joshi
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-flex",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-flex",
          pathname === "/portfolio" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Portfolio
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-flex",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
}
