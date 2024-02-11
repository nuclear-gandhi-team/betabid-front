import {
  BadgeDollarSignIcon,
  CalendarFoldIcon,
  MoveUpRightIcon,
  UserIcon,
} from "lucide-react";

import { BidHistoryItem } from "@/api/types/bid-history";
import { Lot } from "@/api/types/lot";
import LotActionCard from "@/components/modules/lot-action-card";
import RateChangesGraph, {
  GraphItem,
} from "@/components/modules/rate-changes-graph";
import RateHistoryList from "@/components/modules/rate-history/rate-hirstory-list";
import RateHistory from "@/components/modules/rate-history/rate-history";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate, formatDateAndTime } from "@/lib/utils";

const Actions = ({ lot }: { lot: Lot }) => {
  const rateChangesData: GraphItem[] = lot.bidHistory.map(
    (item: BidHistoryItem) => ({
      amount: item.amount,
      time: formatDateAndTime(item.time),
    }),
  );

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <LotActionCard
          title="Current Price"
          description={`Started price was ${lot.startPrice}`}
          icon={<BadgeDollarSignIcon />}
        >
          {lot.currentPrice}
        </LotActionCard>
        <LotActionCard
          title="Min Step"
          description={`The next bid should be at least $${lot.minNextPrice}`}
          icon={<MoveUpRightIcon />}
        >
          {lot.minBetStep}
        </LotActionCard>
        <LotActionCard
          title="Active Players"
          description={`${lot.activeBetsCount} bids from ${lot.activeUsersCount} players`}
          icon={<UserIcon />}
        >
          {lot.activeUsersCount}
        </LotActionCard>
        <LotActionCard title="Deadline" icon={<CalendarFoldIcon />}>
          {formatDate(lot.deadline)}
        </LotActionCard>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 pt-4">
        <Card className="col-span-4 min-h-[420px]">
          <CardHeader>
            <CardTitle>Rate changes</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <RateChangesGraph data={rateChangesData} />
          </CardContent>
        </Card>
        <Card className="md:col-span-3 col-span-4">
          <CardHeader>
            <CardTitle>Rate history</CardTitle>
            <CardDescription>
              This lot had {lot.activeBetsCount} bids for the whole time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RateHistoryList>
              {lot.bidHistory.length == 0 ? (
                <div className="mt-12 flex justify-center items-center text-muted-foreground">
                  No data
                </div>
              ) : (
                lot.bidHistory.map((rateHistory, index) => (
                  <RateHistory
                    key={index}
                    name={rateHistory.userName}
                    time={formatDateAndTime(rateHistory.time)}
                    price={`${rateHistory.amount}$`}
                  />
                ))
              )}
            </RateHistoryList>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Actions;
