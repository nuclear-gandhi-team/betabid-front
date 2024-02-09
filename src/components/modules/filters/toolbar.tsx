"use client";

import {
  CheckCircledIcon,
  ClockIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { ArrowUpDown } from "lucide-react";

import { DataTableFacetedFilter } from "@/components/modules/filters/filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    icon: CheckCircledIcon,
  },
  {
    label: "Preparing",
    value: "preparing",
    icon: ClockIcon,
  },
  {
    label: "Ended",
    value: "ended",
    icon: CrossCircledIcon,
  },
];

export function DataTableToolbar() {
  return (
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
  );
}
