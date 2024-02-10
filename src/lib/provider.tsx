"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Toaster } from "@/components/ui/sonner";

const Provider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
};

export default Provider;
