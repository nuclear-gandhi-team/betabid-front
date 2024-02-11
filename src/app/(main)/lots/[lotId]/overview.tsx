import Image from "next/image";

import { Lot } from "@/api/types/lot";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Overview = ({ lot }: { lot: Lot }) => (
  <div className="flex justify-center flex-col items-center gap-3">
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {lot.images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex justify-center items-center">
                <Image
                  src={"data:image/png;base64," + image}
                  alt={lot.title}
                  width={300}
                  height={300}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
    <div className="text-muted-foreground w-2/3 text-center text-lg">
      {lot.description}
    </div>
  </div>
);

export default Overview;
