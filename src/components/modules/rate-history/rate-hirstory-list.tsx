import { ReactNode } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

const RateHistoryList = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollArea className="w-full h-[350px]">
      <div className="space-y-8 overflow-y-hidden p-3.5">{children}</div>
    </ScrollArea>
  );
};

export default RateHistoryList;
