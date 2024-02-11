"use client";

import {
  ArrowUpDown,
  CheckCircle2,
  ClockIcon,
  LucideIcon,
  Pencil,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import useStatusesQuery from "@/api/hooks/query/useStatusesQuery";
import useTagsQuery from "@/api/hooks/query/useTagsQuery";
import { DataTableFacetedFilter } from "@/components/modules/filters/filter";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface StatusIcons {
  [key: string]: LucideIcon;
}
const statusIcons: StatusIcons = {
  Preparing: ClockIcon,
  Open: CheckCircle2,
  Finished: XCircle,
};
interface DataTableToolbarProps {
  onNameFilterChange: (value: string) => void;
}

export function DataTableToolbar({
  onNameFilterChange,
}: DataTableToolbarProps) {
  const [dataTags] = useTagsQuery({});
  const [dataStatuses] = useStatusesQuery({});
  const tags =
    dataTags?.map((tag) => ({
      value: tag.id.toString(),
      label: tag.name,
    })) || [];
  const statuses =
    dataStatuses?.map((status) => ({
      value: status.name,
      label: status.name,
      icon: statusIcons[status.name],
    })) || [];
  const handleChange = (e: any) => {
    // Создаем новый таймер
    setTimeout(() => {
      onNameFilterChange(e.target.value);
    }, 2000); // Задержка в 2000 мс (2 секунды)
  };

  return (
    <div className="flex justify-between mx-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter lots..."
            className="h-8 w-[150px] lg:w-[250px]"
            onChange={handleChange}
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
