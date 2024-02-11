import { DataTableToolbar } from "@/components/modules/filters/toolbar";
import LotCard from "@/components/modules/lot-card/lot-card";
import PageTitle from "@/components/modules/page-title";

const Page = () => (
  <div className="flex flex-col gap-y-7 pb-4">
    <PageTitle
      title="My Lots"
      description="Here you can find your created lots"
    />
    <DataTableToolbar />
    <LotCard
      title="3,300-Mile 2007 Porsche 911 GT3 RS" //data:image/png;base64,
      imageSrc="/chair.jpeg"
      status="preparing"
      isSaved={false}
      description="This 2007 Porsche 911 997.1 GT3 RS is one of 410 examples built for the US market during a two-year production run. It spent time in multiple states before selling on BaT in March 2021 and being exported to Canada, and it now has 3,300 miles. The car is finished in Carrara White over black leather and Alcantara and is powered by a 3.6-liter flat-six paired with a six-speed manual transaxle. Equipment includes the Sport Chrono and Carbon Interior packages as well as 19″ wheels, Porsche Ceramic Compositeeee Brakes, a limited-slip differential, and an adjustable rear wing. Purchased by the selling dealer in 2021, this 997.1 GT3 RS is now offered in Canada with a build sheet, service records, a car cover, one key, a clean US Carfax report, and a clean Ontario registration."
      currentPrice={215.0}
      deadline="16 April 2024"
      tags={["JJvfd", "sfvfd"]}
    />
    <LotCard
      title="Six-Piece Ferrari Testarossa Luggage Set by Schedoni"
      imageSrc="/img.png"
      status="open"
      isSaved
      description="This six-piece luggage set was produced by Schedoni of Modena for use in a Ferrari Testarossa. The bags are constructed of black leather and feature brass hardware, black stitching, and beige interior lining. Each bag is debossed with a prancing horse logo and “testarossa” script. Acquired by the seller in 2023, this luggage set is now offered at no reserve in Laren, Netherlands, with a Testarossa brochure, combination lock instructions, six luggage tags, five dust bags, four padlocks, and five sets of keys and key wallets."
      currentPrice={12000.0}
      deadline="08 August 2024"
      tags={["Teg1"]}
    />
    <LotCard
      title="Ferrari 575M Maranello Literature, Battery Charger, and Luggage Collection by Schedoni"
      imageSrc="/img_1.png"
      status="finished"
      isSaved={false}
      description="This collection of Ferrari 575M Maranello accessories and literature includes two Schedoni soft garment bags and a suitcase in addition to three dust bags and a Ferrari-branded battery charger. Documentation in the collection consists of 575M Maranello manufacturer’s literature housed in a leather folio in addition to a 2002 Ferrari Yearbook, a 575M Maranello sales brochure, and a press folder and CD. Acquired by the seller in 2023, the collection is now offered at no reserve in Laren, Netherlands."
      currentPrice={21.58}
      deadline="01 Februar 2023"
      tags={["myTegs", "cheap", "tatata"]}
    />
  </div>
);

export default Page;
