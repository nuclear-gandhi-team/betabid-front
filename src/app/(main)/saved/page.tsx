import { DataTableToolbar } from "@/components/modules/filters/toolbar";
import PageTitle from "@/components/modules/page-title";

const Page = () => (
  <div className="flex flex-col gap-y-7 pb-4">
    <PageTitle title="Saved" description="Here you can find your saved lots" />
    <DataTableToolbar />
  </div>
);

export default Page;
