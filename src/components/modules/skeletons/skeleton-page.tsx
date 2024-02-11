"use client";

import SkeletonCard from "@/components/modules/skeletons/skeleton-card";
import SkeletonFilters from "@/components/modules/skeletons/skeleton-filters";
import SkeletonTitle from "@/components/modules/skeletons/skeleton-title";

export function SkeletonPage() {
  return (
    <div className="flex flex-col gap-y-7 pb-4">
      <SkeletonTitle />
      <SkeletonFilters />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
