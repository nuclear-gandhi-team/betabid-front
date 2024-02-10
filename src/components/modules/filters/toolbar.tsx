"use client";

import {
  ArrowUpDown,
  CheckCircle2,
  ClockIcon,
  Pencil,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import { DataTableFacetedFilter } from "@/components/modules/filters/filter";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const tags = [
  {
    value: "rare",
    label: "Rare Collectible",
  },
  {
    value: "luxury",
    label: "Luxury Experience",
  },
  {
    value: "vintage",
    label: "Vintage Treasure",
  },
  {
    value: "art",
    label: "Fine Art",
  },
  {
    value: "exclusive",
    label: "Exclusive Getaway",
  },
  {
    value: "handcrafted",
    label: "Handcrafted Goods",
  },
  {
    value: "memorabilia",
    label: "Signed Memorabilia",
  },
  {
    value: "gourmet",
    label: "Gourmet Delights",
  },
  {
    value: "technological",
    label: "Technological Marvel",
  },
  {
    value: "historical",
    label: "Historical Artifact",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const statuses = [
  {
    label: "Active",
    value: "active",
    icon: CheckCircle2,
  },
  {
    label: "Preparing",
    value: "preparing",
    icon: ClockIcon,
  },
  {
    label: "Ended",
    value: "ended",
    icon: XCircle,
  },
];

export function DataTableToolbar() {
  return (
    <div className="flex justify-between mx-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter lots..."
            className="h-8 w-[150px] lg:w-[250px]"
          />
          <DataTableFacetedFilter title="Tag" options={tags} />
          <DataTableFacetedFilter title="Status" options={statuses} />
          <Button variant="ghost">
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <Link
        href={"../../lots/create"}
        className={cn(
          buttonVariants({
            variant: "secondary",
            size: "default",
          }),
          "space-x-1.5",
        )}
      >
        <Pencil className="h-3.5 w-3.5 text-stone-800" />
        <div className="text-stone-800">Create lot</div>
      </Link>
    </div>
  );
}
