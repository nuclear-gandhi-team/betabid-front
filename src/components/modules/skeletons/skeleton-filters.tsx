"use client";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonFilters = () => (
  <div className="flex justify-between mx-4">
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Skeleton className="h-8 w-[150px] lg:w-[250px]" />
        <Skeleton className="mr-2 h-8 w-16" />
        <Skeleton className="mr-2 h-8 w-20" />
        <Skeleton className="mr-2 h-8 w-24" />
      </div>
    </div>
    <Skeleton className="h-9 w-28" />
  </div>
);

export default SkeletonFilters;
