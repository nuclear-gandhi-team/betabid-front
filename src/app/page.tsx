import LotCard from "@/components/modules/lot-card";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap min-h-screen items-center justify-between p-24 gap-y-24">
      <LotCard
        title="Vintage Chair"
        status="active"
        isSaved={false}
        currentPrice={2500.0}
        deadline="26 Apr 2024"
        tags={["Furniture", "Antiques"]}
      />
    </main>
  );
}
