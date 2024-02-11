import { DataTableToolbar } from "@/components/modules/filters/toolbar";
import NotFound from "@/components/modules/not-found";
import PageTitle from "@/components/modules/page-title";

const Page = () => (
  <div className="flex flex-col gap-y-7 pb-4">
    <PageTitle title="Saved" description="Here you can find your saved lots" />
    <DataTableToolbar />
    <NotFound />
  </div>
);

export default Page;
