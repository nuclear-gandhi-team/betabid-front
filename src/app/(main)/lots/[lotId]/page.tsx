"use client";

import useLotQuery from "@/api/hooks/query/useLotQuery";
import Actions from "@/app/(main)/lots/[lotId]/actions";
import Overview from "@/app/(main)/lots/[lotId]/overview";
import BetModal from "@/components/modules/bet-modal";
import LotTitle from "@/components/modules/lot-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = ({ params }: { params: { lotId: string } }) => {
  const [lot, isLoading] = useLotQuery({ lotId: params.lotId });

  if (isLoading || !lot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <LotTitle title="Antique chair" tags={lot?.tags} />
      <Tabs defaultValue="overview">
        <div className="flex flex-col md:flex-row justify-between w-full pt-5 pb-5 gap-3">
          <TabsList className="w-full md:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
          </TabsList>
          <BetModal
            lotId={lot.id}
            minStep={lot.minBetStep}
            currentPrice={lot.currentPrice}
          />
        </div>
        <TabsContent value="overview">
          <Overview lot={lot} />
        </TabsContent>
        <TabsContent value="actions">
          <Actions lot={lot} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
