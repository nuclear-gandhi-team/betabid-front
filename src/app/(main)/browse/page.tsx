"use client";

import useAllLotsQuery from "@/api/hooks/query/useAllLotsQuery";
import { DataTableToolbar } from "@/components/modules/filters/toolbar";
import PageTitle from "@/components/modules/page-title";
import { SkeletonPage } from "@/components/modules/skeletons/skeleton-page";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Page = () => {
  const [data, isLoading] = useAllLotsQuery({});

  console.log(data);

  if (isLoading) {
    return <SkeletonPage />;
  }

  return (
    <div className="flex flex-col gap-y-7 pb-4">
      <PageTitle title="Browse" description="Here you can find new lots" />
      <DataTableToolbar />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default Page;
