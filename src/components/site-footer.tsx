import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { siteConfig } from "../../config/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:binishjoshi@proton.me"
          >
            <span className="sr-only">Mail</span>
            <MailIcon className="size-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.linkedin}>
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="size-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <FaGithub className="size-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <span>{`© ${new Date().getFullYear()} All Rights Reserved`}</span>
        </div>
      </div>
    </footer>
  );
}
