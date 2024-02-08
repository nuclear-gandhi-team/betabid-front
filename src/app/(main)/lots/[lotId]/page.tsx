import Actions from "@/app/(main)/lots/[lotId]/actions";
import Overview from "@/app/(main)/lots/[lotId]/overview";
import BetModal from "@/components/modules/bet-modal";
import LotTitle from "@/components/modules/lot-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  //TODO: Change lot description to tags
  return (
    <div className="w-full">
      <LotTitle title="Antique chair" description="A beatiful chair" />
      <Tabs defaultValue="overview">
        <div className="flex justify-between w-full pt-5 pb-5">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
          </TabsList>
          <BetModal minStep={1000} currentPrice={2500} />
        </div>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="actions">
          <Actions />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
