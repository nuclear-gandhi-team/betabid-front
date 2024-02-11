const RateHistory = ({
  name,
  time,
  price,
}: {
  name: string;
  time: string;
  price: string;
}) => (
  <div className="flex items-center">
    <div className="space-y-1">
      <p className="text-sm font-medium leading-none">{name}</p>
      <p className="text-sm text-muted-foreground">{time}</p>
    </div>
    <div className="ml-auto font-medium">{price}</div>
  </div>
);

export default RateHistory;
