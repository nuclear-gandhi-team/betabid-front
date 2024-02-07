import LotCard from "@/components/modules/lot-card";
import PageTitle from "@/components/modules/page-title";

const Page = () => (
  <div>
    <PageTitle title="Browse" description="Here you can find new lots" />
    <LotCard
      title="ggg"
      imageSrc="/chair.jpeg"
      status="preparing"
      isSaved={false}
      currentPrice={215.0}
      deadline="1111"
      tags={["JJvfd", "sfvfd"]}
    />
  </div>
);

export default Page;
