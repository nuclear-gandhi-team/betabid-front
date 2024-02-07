"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "@/components/ui/star";
import { Status } from "@/components/ui/status";
import { TagsList } from "@/components/ui/tags";

export interface LotCardProps {
  title: string;
  imageSrc: string;
  status: "preparing" | "active" | "ended";
  isSaved: boolean;
  currentPrice: number;
  deadline: string;
  tags: string[];
}

const LotCard = ({
  title,
  imageSrc,
  status,
  isSaved,
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
    <Card className="w-[360px] relative">
      <div className="w-full h-64 rounded-t-xl overflow-hidden relative">
        <div className="absolute right-0 m-4">
          <Star isSaved={isSavedLot} toggleSave={toggleSave}></Star>
        </div>
        <Image src={imageSrc} alt="card_image" width={360} height={0} />
      </div>

      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>
            <div className="truncate w-[225px]">{title}</div>
          </CardTitle>
          <CardDescription>
            <Status>{status}</Status>
          </CardDescription>
        </div>
        <div className="flex justify-start">
          <TagsList tags={tags}></TagsList>
        </div>
      </CardHeader>

      <CardContent>
        <div>Current Price: {currentPrice}$</div>
      </CardContent>

      <CardFooter>
        <CardDescription>Till {deadline}</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default LotCard;
