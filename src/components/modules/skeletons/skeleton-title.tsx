"use client";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTitle = () => (
  <div className="p-2 space-y-2">
    <Skeleton className="w-32 h-8" />
    <Skeleton className="w-44 h-4" />
  </div>
);

export default SkeletonTitle;
