import LotCard from "@/components/modules/lot-card";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap min-h-screen items-center justify-between p-24 gap-y-24">
      <LotCard
        title="Vintage Chair"
        imageSrc="/chair.jpeg"
        status="active"
        isSaved={false}
        currentPrice={2500.0}
        deadline="26 Apr 2024"
        tags={["Furniture", "Antiques"]}
      />
      <LotCard
        title="V C"
        imageSrc="/chair.jpeg"
        status="preparing"
        isSaved={true}
        currentPrice={100.0}
        deadline="28 Apr 2024"
        tags={["Antiques", "Other"]}
      />
      <LotCard
        title="Long long long Vintage Chair"
        imageSrc="/chair.jpeg"
        status="ended"
        isSaved={false}
        currentPrice={102500.0}
        deadline="15 Apr 2023"
        tags={["Furniture"]}
      />
      <LotCard
        title="Vintage Chair?"
        imageSrc="/chair.jpeg"
        status="active"
        isSaved={true}
        currentPrice={10.5}
        deadline="10 Apr 2024"
        tags={["Antiques"]}
      />
    </main>
  );
}
