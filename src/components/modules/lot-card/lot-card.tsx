"use client";
import { useState } from "react";
import Image from "next/image";

import { Star } from "@/components/modules/lot-card/star";
import { Status } from "@/components/modules/lot-card/status";
import { TagsList } from "@/components/modules/lot-card/tags";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface LotCardProps {
  title: string;
  imageSrc: string;
  status: "preparing" | "active" | "ended";
  isSaved: boolean;
  description: string;
  currentPrice: number;
  deadline: string;
  tags: string[];
}

const LotCard = ({
  title,
  imageSrc,
  status,
  isSaved,
  description,
  currentPrice,
  deadline,
  tags,
}: LotCardProps) => {
  const [isSavedLot, setIsSaved] = useState(isSaved),
    toggleSave = () => {
      console.log("changed");
      setIsSaved(!isSavedLot);
    };
  return (
    <Card className="flex flex-row items-center min-h-[222px] w-[90vw] shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-auto">
      <div className="relative h-[200px] w-full max-w-[23%] mx-3">
        <Image
          src={imageSrc}
          alt="card_image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Separator orientation="vertical" className="h-48 w-[1px]" />
      <div className="w-full mx-6">
        <CardHeader className="h-[60px] p-1">
          <div className="flex justify-between">
            <div className="flex flex-col justify-start">
              <CardTitle className="truncate max-w-[600px] h-[110%] pb-1.5">
                {title}
              </CardTitle>
              <TagsList tags={tags}></TagsList>
            </div>
            <CardDescription className="flex flex-row h-[30px] justify-between w-[12%] mr-1">
              <Status>{status}</Status>
              <Star isSaved={isSavedLot} toggleSave={toggleSave}></Star>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-1">
          <CardDescription className="h-[80px] text-wrap truncate line-clamp-4">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-1 pt-1.5">
          <Badge variant="outline" className="text-sm">
            <p className="font-normal">Current bid</p>
            {`: ${currentPrice}$`}
            <Separator
              orientation="vertical"
              className="h-[10px] w-[1px] text-foreground mx-1.5"
            />
            {deadline}
          </Badge>
        </CardFooter>
      </div>
    </Card>
  );
};

export default LotCard;
