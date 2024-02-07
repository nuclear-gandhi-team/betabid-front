"use client";

import { ReactNode } from "react";

import NavigationBar from "@/components/modules/navigation-bar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { navigationLinks } from "@/lib/const/navigation-links";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen bg-background flex">
      <div className="w-12 h-full border-r">
        <div className="p-3 flex justify-center">
          <Avatar className="h-7 w-7">
            <AvatarFallback>Hj</AvatarFallback>
          </Avatar>
        </div>
        <Separator className="mb-1.5" />
        <NavigationBar links={navigationLinks} />
      </div>
      <div className="pl-10 pr-10 pt-5">{children}</div>
    </main>
  );
};

export default Layout;
