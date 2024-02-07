import {
  BadgeDollarSignIcon,
  BookTextIcon,
  MoveUpRightIcon,
  UserIcon,
} from "lucide-react";

import LotActionCard from "@/components/modules/lot-action-card";
import RateChangesGraph from "@/components/modules/rate-changes-graph";
import RateHistoryList from "@/components/modules/rate-history/rate-hirstory-list";
import RateHistory from "@/components/modules/rate-history/rate-history";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { temporary_data } from "@/lib/const/graph-data";

const Actions = () => {
  //TODO: Replace with real data
  const rateHistories = Array.from({ length: 10 }, (_, index) => ({
    name: `Jeremy ${index + 1}`,
    email: `jeremy${index + 1}@gmail.com`,
    price: `$32,450.00`, // This can be varied as needed
  }));

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <LotActionCard
          title="Current Price"
          description="Started price was $34,000.00"
          icon={<BadgeDollarSignIcon />}
        >
          $45,231.00
        </LotActionCard>
        <LotActionCard
          title="Min Step"
          description="The next bid should be at least $50,231.00"
          icon={<MoveUpRightIcon />}
        >
          $5,000.00
        </LotActionCard>
        <LotActionCard
          title="Active Players"
          description="45 bids from 23 players"
          icon={<UserIcon />}
        >
          23
        </LotActionCard>
        <LotActionCard title="Author" icon={<BookTextIcon />}>
          HJyup
        </LotActionCard>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 pt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Rate changes</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <RateChangesGraph data={temporary_data} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Rate history</CardTitle>
            <CardDescription>
              This lot had 45 bids for the whole time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RateHistoryList>
              {rateHistories.map((rateHistory, index) => (
                <RateHistory
                  key={index}
                  name={rateHistory.name}
                  email={rateHistory.email}
                  price={rateHistory.price}
                />
              ))}
            </RateHistoryList>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Actions;
