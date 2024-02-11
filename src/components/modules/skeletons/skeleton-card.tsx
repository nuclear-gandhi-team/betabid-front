"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => (
  <Card className="flex flex-row items-center min-h-[222px] w-[90vw] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-auto">
    <div className="flex justify-center h-[200px] w-full max-w-[23%] mx-3">
      <Skeleton className="w-11/12 h-[200px]" />
    </div>
    <Separator orientation="vertical" className="h-48 w-[1px]" />
    <div className="w-full mx-6">
      <CardHeader className="h-[60px] p-1">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <CardTitle className="truncate max-w-[600px] h-[110%] pb-1.5">
              <Skeleton className="w-[350px] h-[22px]" />
            </CardTitle>
            <div className="flex flex-row space-x-2">
              <Skeleton className="w-[80px] h-[16px]" />
              <Skeleton className="w-[80px] h-[16px]" />
            </div>
          </div>
          <div className="flex flex-row h-[30px] justify-between w-[12%] mr-1 text-sm text-muted-foreground">
            <Skeleton className="w-[150px] h-[25px]" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-1">
        <div className="h-[80px] space-y-1">
          <Skeleton className="w-[95%] h-[16px]" />
          <Skeleton className="w-[97%] h-[16px]" />
          <Skeleton className="w-[99%] h-[16px]" />
          <Skeleton className="w-[100%] h-[16px]" />
        </div>
      </CardContent>
      <CardFooter className="justify-start p-1 pt-1.5">
        <Skeleton className="w-[230px] h-[20px]" />
      </CardFooter>
    </div>
  </Card>
);

export default SkeletonCard;
