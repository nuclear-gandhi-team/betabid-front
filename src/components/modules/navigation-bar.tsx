"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavigationLink } from "@/lib/const/navigation-links";
import { cn } from "@/lib/utils";

interface NavProps {
  links: NavigationLink[];
}

const Nav = ({ links }: NavProps) => {
  const pathname = `..${usePathname()}`;
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="flex gap-3 flex-row md:gap-1 md:flex-col items-center justify-center">
        <TooltipProvider>
          {links.map((link, index) => (
            <>
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.link}
                    className={cn(
                      buttonVariants({
                        variant: pathname === link.link ? "default" : "ghost",
                        size: "icon",
                      }),
                      "h-9 w-9 mt-0.5",
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            </>
          ))}
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Nav;
