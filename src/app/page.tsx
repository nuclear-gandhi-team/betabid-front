import LotCard from "@/components/modules/lot-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LotCard
        title="Vintage Chair"
        imageSrc="/chair.jpeg"
        status="Open"
        isSaved={false}
        deadline={"26 Apr 2024"}
        tag="Furniture"
      />
    </main>
  );
}
