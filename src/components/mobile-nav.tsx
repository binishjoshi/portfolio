"use client";

import { useState } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

import { siteConfig } from "../../config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <VisuallyHidden>
          <SheetTitle>Menu</SheetTitle>
        </VisuallyHidden>
        <MobileLink
          href="/"
          className="flex items-center font-bold"
          onOpenChange={setOpen}
        >
          Binish Joshi
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/blog">
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/portfolio">
            Portfolio
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about">
            About
          </MobileLink>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            Github
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

function MobileLink({
  href,
  children,
  className,
  onOpenChange,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
