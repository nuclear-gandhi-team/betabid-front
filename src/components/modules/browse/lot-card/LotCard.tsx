import { CircleIcon, StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface LotCardProps {
  title: string;
  imageSrc: string;
  status: string;
  isSaved: boolean;
  deadline: string;
  tag: string;
}

const LotCard = ({
  title,
  imageSrc,
  status,
  isSaved,
  deadline,
  tag,
}: LotCardProps) => (
  <Card className="w-[360px]">
    <div className="w-full h-64 bg-red-400 rounded-t-xl overflow-hidden">
      <Image src={imageSrc} alt="card_image" width={360} height={0} />
    </div>
    <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
      <div className="space-y-1">
        <CardTitle>{title}</CardTitle>
      </div>
      <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
        <Button variant="secondary" className="px-3 shadow-none">
          {status}
        </Button>
        <Separator orientation="vertical" className="h-[20px]" />
        <Button variant="secondary" className="px-1 shadow-none">
          {isSaved ? (
            <StarFilledIcon className="mr-2 h-4 w-4" color="black" />
          ) : (
            <StarIcon className="mr-2 h-4 w-4" color="black" />
          )}
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
          {tag}
        </div>
        <div>{deadline}</div>
      </div>
    </CardContent>
  </Card>
);

export default LotCard;
