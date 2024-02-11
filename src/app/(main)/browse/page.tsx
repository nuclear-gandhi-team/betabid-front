"use client";

import React from "react";

import useAllLotsQuery from "@/api/hooks/query/useAllLotsQuery";
import { DataTableToolbar } from "@/components/modules/filters/toolbar";
import LotCard from "@/components/modules/lot-card/lot-card";
import NotFound from "@/components/modules/not-found";
import PageTitle from "@/components/modules/page-title";
import { SkeletonPage } from "@/components/modules/skeletons/skeleton-page";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [nameStartsWith, setNameStartsWith] = React.useState("");
  const [data, isLoading] = useAllLotsQuery({
    Page: currentPage,
    NameStartsWith: nameStartsWith,
  });
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  if (isLoading) {
    return <SkeletonPage />;
  }
  if (!data) {
    return (
      <div>
        <PageTitle title="Browse" description="Here you can find new lots" />
        <DataTableToolbar onNameFilterChange={setNameStartsWith} />
        <NotFound />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-7 pb-4">
      <PageTitle title="Browse" description="Here you can find new lots" />
      <DataTableToolbar onNameFilterChange={setNameStartsWith} />
      {data &&
        data.lots &&
        data.lots.map((lot) => (
          <LotCard
            key={lot.id}
            title={lot.title}
            imageSrc={"data:image/png;base64," + lot.image}
            status={lot.status}
            isSaved={lot.isSaved}
            description={lot.description}
            currentPrice={lot.currentPrice}
            deadline={lot.deadline}
            tags={lot.tags}
          />
        ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) handlePageClick(currentPage - 1);
              }}
            />
          </PaginationItem>
          {Array.from({ length: data.totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                onClick={(e) => {
                  e.preventDefault();
                  handlePageClick(i + 1);
                }}
                isActive={i + 1 === data.currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < data.totalPages)
                  handlePageClick(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default Page;
